"use server";

import { getTranslations } from "next-intl/server";

/**
 *
 * @param response - The response object from the fetch request.
 * @returns A string message or null if no error message is found.
 */
async function parseAPIErrorMessages(
    response: Response
): Promise<string | null> {
    const t = await getTranslations("APIErrorMessages");

    const errorMessages: Record<number, string> = {
        404: t("404"),
        401: t("401"),
        403: t("403"),
        500: t("500"),
        429: t("429"),
    };

    const msg = errorMessages[response.status] || null;

    if (msg) return msg;

    return null;
}

export default parseAPIErrorMessages;
