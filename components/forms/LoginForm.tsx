"use client";

import { cn } from "@/utils";
import PdIcon from "../logos/PdIcon";
import { Button, Input } from "../ui";

interface LoginFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    className?: string;
}

const LoginForm = ({ className, ...props }: LoginFormProps) => {
    return (
        <form
            className={cn(
                `flex flex-col items-center justify-center gap-4
                shadow rounded-2xl px-6 py-8 mx-auto max-w-72 w-full`,
                className
            )}
            {...props}>
            <div className="flex flex-col items-center text-center r2l mb-4">
                <PdIcon className="text-drd-primary mb-2 w-10 sm:w-11" />
                <h2 className="text-lg sm:text-xl text-drd-neutral-700 font-bold">
                    ورود به سیستم
                </h2>
                <p className="text-xs sm:text-sm text-drd-neutral-600 max-w-44 sm:max-w-60">
                    برای ورود به حساب کاربری خود لطفا اطلاعات زیر را وارد کنید.
                </p>
            </div>

            <Input
                dir="rtl"
                type="text"
                name="username"
                label="نام کاربری"
                uniqueId="username"
                placeholder="ایمیل، نام کاربری یا شماره همراه"
            />
            <Input
                dir="rtl"
                label="رمز عبور"
                name="password"
                type="password"
                className="mt-4"
                uniqueId="password"
                placeholder="رمز عبور"
            />
            <Button type="submit" fullWidth btnType="primary">
                ورود
            </Button>
        </form>
    );
};

export default LoginForm;
