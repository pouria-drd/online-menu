"use server";

import BaseApiService from "./BaseApiService";
import { loginFormSchema } from "@/libs/validation";

class AuthService extends BaseApiService {
    /**
     * Logs in the user by sending login credentials to the server
     * @param formData The login form data
     * @returns The login response or an error
     */
    async login(formData: FormData): Promise<LoginResponse> {
        // Validate form data
        const validationResult = loginFormSchema.safeParse(
            Object.fromEntries(formData)
        );
        if (!validationResult.success) {
            return {
                success: false,
                validationErrors: validationResult.error.flatten()
                    .fieldErrors as LoginValidationErrors,
            };
        }

        const fetchResult = await this.fetchWithTimeout("/users/login/", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: validationResult.data.username,
                password: validationResult.data.password,
            }),
        });

        if (fetchResult.response) {
            const jsonResponse = await fetchResult.response.json();

            if (fetchResult.response.ok) {
                return {
                    success: true,
                    data: jsonResponse.message,
                };
            }

            return {
                success: false,
                serverError: jsonResponse.message,
                validationErrors:
                    typeof jsonResponse === "object" ? jsonResponse : undefined,
            };
        }

        return {
            success: false,
            serverError: fetchResult.apiError,
        };
    }
}

export default AuthService;
