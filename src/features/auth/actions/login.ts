"use server";

import { z } from "zod";
import { getTranslations } from "next-intl/server";
import { parseAPIErrorMessages } from "@/lib/utils";
import { loginSchema } from "../validators/loginSchema";
import { getDeviceInfo } from "@/features/user/actions";
import { setTokenToCookie } from "@/features/token/actions";

interface Props extends ServerActionBaseProps {}
interface Return extends ServerActionBasePromise {}

const envTimeout = Number(process.env.timeout) || 10000;

async function loginAction(
	prevState: any,
	formData: FormData,
	props?: Props,
): Promise<Return> {
	if (props?.delay) {
		await new Promise((resolve) => setTimeout(resolve, props.delay));
	}

	const t = await getTranslations("ServerActions.login");
	const schema = loginSchema(t);
	const result = schema.safeParse(Object.fromEntries(formData));

	if (!result.success) {
		const errorsTree = z.treeifyError(result.error);
		return {
			success: false,
			inputErrors: {
				username: errorsTree.properties?.username?.errors ?? [],
				password: errorsTree.properties?.password?.errors ?? [],
			},
		};
	}

	const deviceInfo = await getDeviceInfo();

	// Set default options for timeout
	const timeout = props?.timeout ?? envTimeout;
	// Set up a timeout using AbortController
	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), timeout);

	try {
		// Set up url
		const apiUrl = process.env.BASE_API_URL + "authentication/login/";

		// Send a POST request to login the user with JSON body
		const response = await fetch(apiUrl, {
			cache: "no-cache",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: result.data.username,
				password: result.data.password,
				device_info: deviceInfo,
			}),
			signal: controller.signal,
		});

		// Parse the response as JSON.
		const jsonResponse = await response.json();

		// Handle HTTP error responses
		if (!response.ok) {
			const serverErrorMessages = await parseAPIErrorMessages(response);

			if (serverErrorMessages) {
				return { success: false, serverErrors: serverErrorMessages };
			} else if (response.status === 400) {
				return {
					success: false,
					serverErrors: t("serverErrors.loginFailed"),
				};
			} else {
				return {
					success: false,
					serverErrors: t("serverErrors.unexpectedError"),
				};
			}
		}

		// If access token is in the response, set it in cookies and return it.
		if (jsonResponse.access) {
			const access = jsonResponse.access;
			await setTokenToCookie("access", access);

			const refresh = jsonResponse.refresh;
			await setTokenToCookie("refresh", refresh);
		}

		return {
			success: true,
			message: t("success"),
		};
	} catch (error) {
		if (error instanceof DOMException && error.name === "AbortError") {
			return {
				success: false,
				serverErrors: t("serverErrors.timeout"),
			};
		}
		return {
			success: false,
			serverErrors: t("serverErrors.unexpectedError"),
		};
	} finally {
		clearTimeout(timeoutId); // Always clear timeout
	}
}

export default loginAction;
