"use server";

import { jwtDecode } from "jwt-decode";

/**
 * Decodes a JWT token and returns its payload.
 * @param token - The JWT token to decode.
 * @returns The decoded token payload, or null if the token is invalid or not found.
 */
async function decodeToken<T>(token: string): Promise<T> {
    return jwtDecode<T>(token);
}

export default decodeToken;
