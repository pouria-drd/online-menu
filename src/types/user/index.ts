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

interface DeviceInfo {
	ip_address: string;
	user_agent: string;
	device_type: "Mobile" | "Tablet" | "PC" | "Bot" | "Unknown";
	os: string;
	os_version: string;
	browser: string;
	browser_version: string;
	device_brand: string;
	device_model: string;
}
