import type { MetadataRoute } from "next";

function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["admin", "panel", "dashboard"],
        },
        sitemap: "https://pouria-drd.ir/sitemap.xml",
    };
}

export default robots;
