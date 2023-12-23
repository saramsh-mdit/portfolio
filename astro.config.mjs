import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind(), react()],
});
