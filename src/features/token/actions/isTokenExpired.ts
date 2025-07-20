"use server";

import decodeToken from "./decodeToken";

/**
 * Checks if the token is expired.
 * @param token - The token to check.
 * @returns True if the token is expired, false otherwise.
 */
async function isTokenExpired(token: string): Promise<boolean> {
    const { exp } = await decodeToken<{ exp: number }>(token);
    return Date.now() / 1000 > exp;
}

export default isTokenExpired;
