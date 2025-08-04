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
