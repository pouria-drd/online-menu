"use server";

import { cookies } from "next/headers";
import {
	getTokenFromCookie,
	getTokenName,
	getValidToken,
} from "@/features/token/actions";

/**
 * This action is used to log out the user by clearing the access and refresh tokens.
 */
async function logoutAction() {
	try {
		// Attempt to retrieve the access and refresh tokens from cookies.
		const accessToken: string | null = await getValidToken();
		const refreshToken = await getTokenFromCookie("refresh");

		if (!refreshToken || !accessToken) {
			return;
		}

		const apiUrl = process.env.BASE_API_URL + "authentication/logout/";

		// Send a POST request to the logout endpoint.
		await fetch(apiUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${accessToken}`,
			},
			body: JSON.stringify({ refresh: refreshToken }),
		});

		const aName = await getTokenName("access");
		const rName = await getTokenName("refresh");

		if (aName) {
			(await cookies()).delete(aName);
		}

		if (rName) {
			(await cookies()).delete(rName);
		}
	} catch (error) {
		if (process.env.NODE_ENV === "development") {
			console.error("Error logging out:", error);
		}
	}
}

export default logoutAction;
