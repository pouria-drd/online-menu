"use server";

import decodeToken from "./decodeToken";
import isTokenExpired from "./isTokenExpired";

/**
 * Retrieves the user object from the token.
 * @param token - The JWT token.
 * @returns The user object.
 */
async function convertTokenToUser(token: string): Promise<UserSession | null> {
    const isExpired = await isTokenExpired(token);
    if (isExpired) return null;

    const decodedToken = await decodeToken<Token>(token);
    const user: UserSession = {
        id: decodedToken.user_id,
        isAdmin: decodedToken.isAdmin,
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        username: decodedToken.username,
    };
    return user;
}

export default convertTokenToUser;
