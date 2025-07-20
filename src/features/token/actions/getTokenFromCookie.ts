"use server";

import { cookies } from "next/headers";
import getTokenName from "./getTokenName";

/**
 * XML Documentation:
 * <function>
 *   <name>getTokenFromCookie</name>
 *   <description>Retrieves the specified token from cookies based on token type.</description>
 *   <param name="type" type="string">The token type to retrieve: "access" or "refresh".</param>
 *   <returns>Returns the token value as a string if found, or null if not available.</returns>
 * </function>
 */

/**
 * Fetches a token from cookies by token type.
 *
 * @param type - A string indicating the token type, either "access" or "refresh".
 * @returns The token value if available; otherwise, null.
 */
async function getTokenFromCookie(
    type: "access" | "refresh"
): Promise<string | null> {
    // Retrieve the token name associated with the specified type ("access" or "refresh").
    const tokenName: string | null = await getTokenName(type);

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
