"use server";

import BaseApiService from "./BaseApiService";
import { loginFormSchema } from "@/libs/validation";
import { getBaseApiUrl, handleCommonError } from "@/utils";

class AuthService extends BaseApiService {
    /**
     * Logs in the user by sending login credentials to the server
     * @param formData The login form data
     * @returns The login response or an error
     */
    async login(formData: FormData): Promise<LoginResponse> {
        // Validate form data
        const result = loginFormSchema.safeParse(Object.fromEntries(formData));
        if (!result.success) {
            return {
                success: false,
                validationErrors: result.error.flatten()
                    .fieldErrors as LoginValidationErrors,
            };
        }

        try {
            // Fetch the API base URL
            const apiUrl = await getBaseApiUrl();

            if (!apiUrl) {
                throw new Error("API URL is not set.");
            }

            const response = await this.fetchWithTimeout(
                `${apiUrl}/users/login/`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: result.data.username,
                        password: result.data.password,
                    }),
                }
            );

            const jsonResponse = await response.json();

            if (response.ok) {
                return {
                    data: jsonResponse.message,
                    success: true,
                };
            }

            return {
                success: false,
                serverError: jsonResponse.message,
                validationErrors:
                    typeof jsonResponse === "object" ? jsonResponse : undefined,
            };
        } catch (error: any) {
            return handleCommonError(error);
        }
    }
}

export default AuthService;
