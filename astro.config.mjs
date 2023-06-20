import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import astroI18next from "astro-i18next";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), astroI18next()]
});