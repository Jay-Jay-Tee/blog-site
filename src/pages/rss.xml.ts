import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getPath } from "@/utils/getPath";
import getSortedPosts from "@/utils/getSortedPosts";
import { SITE } from "@/config";

export async function GET() {
  const blogPosts = await getCollection("blog");
  const writeups = await getCollection("writeups");

  const all = [...blogPosts, ...writeups];
  const sortedPosts = getSortedPosts(all as any);

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map((post) => {
      const { data, id, filePath } = post as any;

      // Use getPath for all posts (blog and writeups) for consistency
      const link = getPath(id, filePath);

      // Ensure link is absolute URL
      const absoluteLink = link.startsWith("http") ? link : `${SITE.website.replace(/\/$/, "")}${link}`;

      return {
        link: absoluteLink,
        title: data.title,
        description: data.description || "",
        pubDate: new Date(data.modDatetime ?? data.pubDatetime),
      };
    }),
  });
}
