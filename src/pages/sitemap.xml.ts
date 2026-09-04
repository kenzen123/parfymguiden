import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") ?? "";

  const staticPaths = ["", "/recensioner", "/guider", "/dofttyper"];

  const reviews = await getCollection("recensioner");
  const guides = await getCollection("guider");

  const urls = [
    ...staticPaths,
    ...reviews.map((r) => `/recensioner/${r.slug}`),
    ...guides.map((g) => `/guider/${g.slug}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${base}${path}</loc></url>`).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
