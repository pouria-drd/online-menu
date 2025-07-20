"use server";

/**
 * XML Documentation:
 * <function>
 *   <name>getTokenLifetime</name>
 *   <description>Fetches the lifetime (in seconds) for the specified token type, either access or refresh.</description>
 *   <param name="tokenType" type="string">Specifies the token type: "access" or "refresh".</param>
 *   <returns>Returns the token lifetime as a number if set, or null if not configured.</returns>
 * </function>
 */

// Set token lifetime environment variables, defaulting to null if not set.
const ACCESS_TOKEN_LIFETIME: string | null =
    process.env.ACCESS_TOKEN_LIFETIME ?? null;
const REFRESH_TOKEN_LIFETIME: string | null =
    process.env.REFRESH_TOKEN_LIFETIME ?? null;

/**
 * Retrieves the lifetime of the specified token type in seconds.
 *
 * @param tokenType - A string indicating "access" or "refresh" token type.
 * @returns The token lifetime in seconds if available; otherwise, null.
 */
async function getTokenLifetime(
    tokenType: "access" | "refresh"
): Promise<number | null> {
    // Check if the token type is "access" and parse its lifetime.
    if (tokenType === "access") {
        if (ACCESS_TOKEN_LIFETIME) {
            return parseInt(ACCESS_TOKEN_LIFETIME, 10) * 60; // Parse and return lifetime as an integer.
        } else {
            console.warn(
                "ACCESS_TOKEN_LIFETIME is not set in the environment variables."
            );
            return null;
        }
    }

    // Check if the token type is "refresh" and parse its lifetime.
    if (tokenType === "refresh") {
        if (REFRESH_TOKEN_LIFETIME) {
            return parseInt(REFRESH_TOKEN_LIFETIME, 10) * 3600; // Parse and return lifetime as an integer.
        } else {
            console.warn(
                "REFRESH_TOKEN_LIFETIME is not set in the environment variables."
            );
            return null;
        }
    }

    // Return null if tokenType is neither "access" nor "refresh".
    return null;
}

export default getTokenLifetime;
