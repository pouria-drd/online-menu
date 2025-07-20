// Server Actions

interface ServerActionBaseProps {
    delay?: number;
    timeout?: number;
}

interface ServerActionBasePromise {
    success?: boolean;
    message?: string;
    serverErrors?: string;
    inputErrors?: Record<string, string[]>;
}

// User
interface UserSession {
    id: string;
    username: string;
    isAdmin: boolean;
    firstName?: string;
    lastName?: string;
}

interface Token {
    exp: number;
    iat: number;
    jti: string;
    user_id: string;
    isAdmin: boolean;
    firstName?: string;
    lastName?: string;
    username: string;
    token_type: string;
}
