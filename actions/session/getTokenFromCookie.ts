"use server";

import { cookies } from "next/headers";
import getTokenName from "./getTokenName";

/**
 * Fetches a token from cookies by token type.
 *
 * @param tokenType - A string indicating the token type, either "accessToken" or "refreshToken".
 * @returns The token value if available; otherwise, null.
 */
async function getTokenFromCookie(
    tokenType: "accessToken" | "refreshToken"
): Promise<string | null> {
    // Retrieve the token name associated with the specified type ("access" or "refresh").
    const tokenName = await getTokenName(tokenType);

    // If no token name is found, return null.
    if (!tokenName) {
        return null;
    }

    // Attempt to retrieve the token value from cookies using the token name.
    const token: string | undefined = (await cookies()).get(tokenName)?.value;

    // Return null if the token is not found in cookies.
    if (!token) {
        return null;
    }

    // Return the token value if successfully retrieved.
    return token;
}

export default getTokenFromCookie;
