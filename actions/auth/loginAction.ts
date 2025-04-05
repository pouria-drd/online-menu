"use server";

import { delay, getBaseApiUrl } from "@/utils";
import { loginFormSchema } from "@/libs/validation";

interface LoginProps extends BaseApiProps {
    redirectUrl: string;
}

async function loginAction(
    state: any,
    formData: FormData,
    props?: LoginProps
): Promise<LoginResponse> {
    // set delay for testing purposes
    if (props?.delayMs) await delay(props.delayMs);

    // set up a timeout using AbortController
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), props?.timeout || 10000);

    const result = loginFormSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            validationErrors: result.error.flatten()
                .fieldErrors as LoginValidationErrors,
        };
    }

    const data = result.data;

    try {
        // set up url
        const apiUrl = await getBaseApiUrl();
        // if base url is not set, throw an error
        if (!apiUrl) {
            throw new Error("API URL is not set.");
        }

        const response = await fetch(`${apiUrl}/users/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            signal: controller.signal,
        });

        // parse the response as JSON
        const jsonResponse = await response.json();

        // handle http error responses
        if (!response.ok) {
            console.log(jsonResponse);
            return {
                serverError: jsonResponse.message,
                validationErrors:
                    typeof jsonResponse === "object" ? jsonResponse : undefined,
            };
        }

        // return the response data
        return {
            data: jsonResponse.message,
            success: "درخواست با موفقیت انجام شد.",
        };
    } catch (error: any) {
        // log error for debugging in development
        if (process.env.NODE_ENV === "development") {
            console.error("Error fetching data:", error);
        }

        // handle http error responses
        if (error instanceof DOMException && error.name === "AbortError") {
            return {
                serverError:
                    "مدت زمان درخواست طولانی شد. لطفاً دوباره تلاش کنید.",
            };
        }

        return { serverError: "خطای ناشناخته‌ای رخ داد." };
    } finally {
        // clear the timeout
        clearTimeout(id);
    }
}

export default loginAction;
