"use client";

import { toast } from "sonner";
import { loginAction } from "../actions";
import { useTranslations } from "next-intl";
import { PdIcon } from "@/components/icons";
import { useActionState, useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { LanguageSwitcher, ThemeToggle } from "@/components/common";
import {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Input,
    Label,
} from "@/components/ui";

function LoginForm() {
    const searchParams = useSearchParams();
    const next = searchParams.get("next");
    const t = useTranslations("Forms.LoginForm");

    const handleLoginAction = async (_: unknown, formData: FormData) => {
        const result = await loginAction(undefined, formData);

        if (result.success) {
            toast.success(result.message);
        }

        return result;
    };

    const [state, formAction, isPending] = useActionState(
        handleLoginAction,
        undefined
    );

    useEffect(() => {
        if (state?.success) {
            const redirectTo = next ?? "/dashboard";
            redirect(redirectTo);
        }

        if (state?.serverErrors) {
            toast.error(state.serverErrors);
        }
    }, [state, next]);

    return (
        <Card className="w-full max-w-xs">
            <CardHeader className="flex flex-col items-center justify-center gap-2">
                <PdIcon className="text-primary size-12" animation={false} />
                <CardTitle className="mt-2">{t("title")}</CardTitle>
                <CardDescription>{t("description")}</CardDescription>
            </CardHeader>

            <CardContent>
                <form action={formAction} id="login-form">
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="username">
                                {t("labels.username")}
                            </Label>
                            <Input
                                name="username"
                                autoComplete="username"
                                placeholder={t("placeholders.username")}
                            />
                            {state?.inputErrors?.username && (
                                <span className="text-xs text-destructive">
                                    {state.inputErrors.username}
                                </span>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">
                                {t("labels.password")}
                            </Label>
                            <Input
                                name="password"
                                type="password"
                                placeholder={t("placeholders.password")}
                            />
                            {state?.inputErrors?.password && (
                                <span className="text-xs text-destructive">
                                    {state.inputErrors.password}
                                </span>
                            )}
                        </div>
                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex flex-col items-center justify-center gap-2">
                <Button
                    type="submit"
                    variant="default"
                    disabled={isPending}
                    form="login-form"
                    className="w-full">
                    {t("submit")}
                </Button>
            </CardFooter>

            <CardFooter className="flex items-center justify-center gap-2">
                <LanguageSwitcher />
                <ThemeToggle />
            </CardFooter>
        </Card>
    );
}

export default LoginForm;
