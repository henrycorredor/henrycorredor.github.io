import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  site: "https://barebones.superwebthemes.com",
  vite: {
    plugins: [tailwindcss()],
  },
});