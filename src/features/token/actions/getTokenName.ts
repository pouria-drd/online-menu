"use server";

/**
 * XML Documentation:
 * <function>
 *   <name>getTokenName</name>
 *   <description>Fetches the token name for either access or refresh tokens based on the provided token type.</description>
 *   <param name="tokenType" type="string">Specifies the token type: "access" or "refresh".</param>
 *   <returns>Returns the token name as a string if set, or null if not found.</returns>
 * </function>
 */

// Set token name environment variables, defaulting to null if not provided.
const ACCESS_TOKEN_NAME: string | null = process.env.ACCESS_TOKEN_NAME ?? null;
const REFRESH_TOKEN_NAME: string | null =
    process.env.REFRESH_TOKEN_NAME ?? null;

/**
 * Retrieves the token name based on the token type.
 *
 * @param tokenType - A string indicating "access" or "refresh" token type.
 * @returns The token name if available; otherwise, null.
 */
async function getTokenName(
    tokenType: "access" | "refresh"
): Promise<string | null> {
    // Check for "access" token type and log a warning if the name is not set.
    if (tokenType === "access") {
        if (ACCESS_TOKEN_NAME) {
            return ACCESS_TOKEN_NAME;
        } else {
            console.warn(
                "ACCESS_TOKEN_NAME is not set in the environment variables."
            );
            return null;
        }
    }

    // Check for "refresh" token type and log a warning if the name is not set.
    if (tokenType === "refresh") {
        if (REFRESH_TOKEN_NAME) {
            return REFRESH_TOKEN_NAME;
        } else {
            console.warn(
                "REFRESH_TOKEN_NAME is not set in the environment variables."
            );
            return null;
        }
    }

    // Default return value if tokenType is neither "access" nor "refresh".
    return null;
}

export default getTokenName;
