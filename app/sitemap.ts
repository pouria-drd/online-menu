import type { MetadataRoute } from "next";

function siteMap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://pouria-drd.ir",
            lastModified: "03/24/2025",
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://pouria-drd.ir/login",
            lastModified: "03/24/2025",
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
export default siteMap;
