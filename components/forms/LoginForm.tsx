"use client";

import { cn } from "@/utils";
import PdIcon from "../logos/PdIcon";
import { Button, Input } from "../ui";

interface LoginFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    className?: string;
    onAction?: () => void;
}

const LoginForm = ({ className, ...props }: LoginFormProps) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={cn(
                `flex flex-col items-center justify-center gap-4
                rounded-lg px-6 py-8 mx-auto max-w-72 w-full`,
                className
            )}
            {...props}>
            <div className="flex flex-col items-center text-center gap-1 r2l mb-4">
                <PdIcon className="text-drd-primary mb-1 w-10 sm:w-11" />
                <h2 className="text-lg sm:text-xl text-drd-neutral-700 font-bold">
                    ورود به سیستم
                </h2>
                <p className="text-xs sm:text-sm text-drd-neutral-600 max-w-44 sm:max-w-60">
                    برای ورود به حساب کاربری خود لطفا اطلاعات زیر را وارد کنید.
                </p>
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
            />
            <Button type="submit" fullWidth btnType="primary">
                ورود
            </Button>
        </form>
    );
};

export default LoginForm;
