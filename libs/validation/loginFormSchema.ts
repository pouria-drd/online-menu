import { z } from "zod";

const loginFormSchema = z.object({
    username: z.string().trim().min(1, "نام کاربری باید حداقل 1 کاراکتر باشد"),
    password: z.string().trim().min(1, "رمز عبور باید حداقل 1 کاراکتر باشد"),
});

export default loginFormSchema;
