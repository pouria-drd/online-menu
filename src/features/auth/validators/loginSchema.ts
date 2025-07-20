import { z } from "zod";

export function loginSchema(t: (key: string) => string) {
    return z.object({
        username: z.string().min(3, { message: t("zodErrors.username.min") }),
        password: z.string().min(3, { message: t("zodErrors.password.min") }),
    });
}

export type LoginFormValues = z.infer<ReturnType<typeof loginSchema>>;
