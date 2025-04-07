"use server";

import { AuthService } from "@/services";

interface LoginProps extends BaseApiOptions {
    redirectUrl: string;
}

async function loginAction(
    state: any,
    formData: FormData,
    props?: LoginProps
): Promise<LoginResponse> {
    // Get delayMs from props
    const delayMs = props?.delayMs;
    // Get timeout from props
    const timeout = props?.timeout;

    // Instantiate AuthService
    const authService = new AuthService({ delayMs, timeout });

    // Call the login method from AuthService
    const response = await authService.login(formData);

    return response;
}

export default loginAction;
