"use client";

import { cn } from "@/utils";
import { Button, Input } from "../ui";
import { useActionState } from "react";
import { PdIcon } from "@/components/logos";
import { loginAction } from "@/actions/auth";
import { useSearchParams } from "next/navigation";

interface LoginFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    className?: string;
    onAction?: () => void;
}

const LoginForm = ({ className, ...props }: LoginFormProps) => {
    const searchParams = useSearchParams();
    const next = searchParams.get("next");

    const [state, formAction, isPending] = useActionState(
        (state: unknown, formData: FormData) =>
            handleLoginAction(state, formData),

        undefined
    );

    async function handleLoginAction(state: unknown, formData: FormData) {
        const redirectUrl: string = next ?? "/dashboard";

        const response = await loginAction(state, formData, {
            timeout: 10000,
            // delayMs: 4000,
            redirectUrl,
        });

        return response;
    }

    return (
        <form
            action={formAction}
            className={cn(
                `flex flex-col items-center justify-center gap-4
                rounded-lg px-6 py-8 mx-auto max-w-72 w-full`,
                className
            )}
            {...props}>
            <div className="flex flex-col items-center text-center gap-2 r2l mb-4">
                <PdIcon className="text-drd-primary w-10 sm:w-11" />
                <div className="space-y-1">
                    <h2 className="text-lg sm:text-xl text-drd-neutral-700 font-bold">
                        ورود به سیستم
                    </h2>
                    <p className="text-xs sm:text-sm text-drd-neutral-600 max-w-44 sm:max-w-60">
                        برای ورود به حساب کاربری خود لطفا اطلاعات زیر را وارد
                        کنید.
                    </p>
                </div>
                {state?.serverError && (
                    <p className="error-message">{state.serverError}</p>
                )}

                {state?.data?.message && (
                    <p className="success-message">{state.data.message}</p>
                )}
            </div>

            <Input
                dir="rtl"
                required
                type="text"
                minLength={1}
                name="username"
                label="نام کاربری"
                uniqueId="username"
                placeholder="نام کاربری،ایمیل یا شماره همراه را وارد کنید"
                onPaste={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                error={state?.validationErrors?.username}
            />
            <Input
                dir="rtl"
                required
                minLength={1}
                label="رمز عبور"
                name="password"
                type="password"
                className="mt-4"
                uniqueId="password"
                placeholder="رمز عبور خود را وارد کنید"
                onPaste={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                error={state?.validationErrors?.password}
            />
            <Button
                type="submit"
                fullWidth
                btnType="primary"
                isBusy={isPending}>
                ورود
            </Button>
        </form>
    );
};

export default LoginForm;
