"use server";

import { convertTokenToUser, getValidToken } from "@/features/token/actions";

/**
 * XML Documentation:
 * <function>
 *   <name>getSession</name>
 *   <description>Retrieves the current user session by validating and converting the access token.</description>
 *   <returns>Returns a User object if the session is valid, or null if not.</returns>
 *   <throws>Returns null if token retrieval or conversion fails.</throws>
 * </function>
 */

/**
 * Retrieves the current user session by validating the access token.
 *
 * @returns A User object if the token is valid and convertible, otherwise null.
 */
async function getUserSession(): Promise<UserSession | null> {
    try {
        // Attempt to retrieve a valid access token.
        const token: string | null = await getValidToken();

        // Return null if no valid token is available.
        if (!token) {
            return null;
        }

        // Convert the valid token to a User object.
        const user: UserSession | null = await convertTokenToUser(token);

        // Return the User object or null if conversion fails.
        return user;
    } catch (error) {
        // Return null if an error occurs during token retrieval or conversion.
        return null;
    }
}

export default getUserSession;
