import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@/site-config";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: `${SITE.author.fullName} · Blog`,
    description: SITE.author.bio,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
