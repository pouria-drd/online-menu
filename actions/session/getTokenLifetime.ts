"use server";

// Set token lifetime environment variables, defaulting to 15 minutes for access tokens and 24 hours for refresh tokens.
const ACCESS_TOKEN_LIFETIME: string = process.env.ACCESS_TOKEN_LIFETIME ?? "15";
const REFRESH_TOKEN_LIFETIME: string =
    process.env.REFRESH_TOKEN_LIFETIME ?? "24";

/**
 * Retrieves the lifetime of the specified token type in seconds.
 *
 * @param tokenType - A string indicating "accessToken" or "refresh" token type.
 * @returns The token lifetime in seconds if available; otherwise, null.
 */
async function getTokenLifetime(
    tokenType: "accessToken" | "refreshToken"
): Promise<number> {
    // Check if the token type is "access" and parse its lifetime.
    if (tokenType === "accessToken") {
        return parseInt(ACCESS_TOKEN_LIFETIME, 10) * 60; // Parse and return lifetime as an integer.
    }

    // Check if the token type is "refreshToken" and parse its lifetime.
    else {
        return parseInt(REFRESH_TOKEN_LIFETIME, 10) * 3600; // Parse and return lifetime as an integer.
    }
}

export default getTokenLifetime;
