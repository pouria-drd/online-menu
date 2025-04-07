type IconProps = {
    className?: string;
};

// API types
// ------------------------------------------------------------------------------------

type BaseApiOptions = {
    delayMs?: number;
    timeout?: number;
};

type BaseApiResponse<T, U = Record<string, string[] | undefined>> = {
    data?: T;
    success: boolean;
    serverError?: string;
    validationErrors?: U;
};

// Login types
// ------------------------------------------------------------------------------------
type LoginData = {
    username: string;
    password: string;
};

type LoginResponseData = {
    message: string;
};

type LoginValidationErrors = Record<keyof LoginData, string[] | undefined>;

type LoginResponse = BaseApiResponse<LoginResponseData, LoginValidationErrors>;
