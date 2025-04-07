"use server";

const ACCESS_TOKEN_NAME: string = "cct";
const REFRESH_TOKEN_NAME: string = "rft";

/**
 * Retrieves the token name based on the token type.
 *
 * @param tokenType - A string indicating "accessToken" or "refreshToken" token type.
 * @returns The token name.
 */
async function getTokenName(
    tokenType: "accessToken" | "refreshToken"
): Promise<string> {
    // Retrieve the token name associated with the specified type ("access" or "refresh").
    const tokenName =
        tokenType === "accessToken" ? ACCESS_TOKEN_NAME : REFRESH_TOKEN_NAME;

    // Return the token name.
    return tokenName;
}

export default getTokenName;
