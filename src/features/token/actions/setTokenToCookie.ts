"use server";

import { cookies } from "next/headers";
import getTokenName from "./getTokenName";
import getTokenLifetime from "./getTokenLifetime";

/**
 * XML Documentation:
 * <function>
 *   <name>setTokenToCookie</name>
 *   <description>Sets a token in cookies with the specified type, value, and security attributes.</description>
 *   <param name="type" type="string">The token type, either "access" or "refresh".</param>
 *   <param name="value" type="string">The token value to store in the cookie.</param>
 *   <throws>Throws an error if token name or lifetime is not set in environment variables.</throws>
 * </function>
 */

/**
 * Sets a token in cookies with specified security options.
 *
 * @param type - The token type, either "access" or "refresh".
 * @param value - The token value to be stored.
 * @throws If the token name or lifetime is not configured in environment variables.
 */
async function setTokenToCookie(type: "access" | "refresh", value: string) {
    // Retrieve the token name based on the token type.
    const tokenName: string | null = await getTokenName(type);

    // Retrieve the token lifetime in seconds based on the token type.
    const tokenLifetime: number | null = await getTokenLifetime(type);

    // Throw an error if token name or lifetime is not properly configured.
    if (!tokenName || !tokenLifetime) {
        throw new Error("Token name or lifetime is not set.");
    }

    // Set the token in cookies with specified security and path attributes.
    (await cookies()).set({
        path: "/", // Make cookie accessible site-wide.
        value: value, // The value to store in the cookie.
        name: tokenName, // The name of the cookie.
        secure: true, // Ensures cookie is sent over HTTPS only.
        httpOnly: true, // Prevents client-side access to the cookie.
        sameSite: "lax", // Restricts cookie usage to same-site requests.
        maxAge: tokenLifetime, // Sets the cookie's expiration time in seconds.
    });
}

export default setTokenToCookie;
