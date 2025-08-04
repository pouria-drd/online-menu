import { getUserSession } from "@/features/user/actions";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const redirectUrl = new URL("/auth/login", request.url);
	redirectUrl.searchParams.set("next", request.url); // Preserve the original URL in the 'next' parameter
	try {
		const userSession: UserSession | null = await getUserSession();

		// Redirect to login if the user is not authenticated
		if (userSession === null) {
			return NextResponse.redirect(redirectUrl, { status: 303 });
		}

		// Allow the request to proceed if all checks pass
		return NextResponse.next();
	} catch (error) {
		if (process.env.NODE_ENV === "development") {
			console.error("Middleware error:", error);
		}

		return NextResponse.redirect(new URL("/", request.url), {
			status: 500,
		});
	}
}

// Apply middleware to specific routes only
export const config = {
	matcher: ["/panel/:path*"],
};
