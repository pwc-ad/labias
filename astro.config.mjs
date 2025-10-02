// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Roboto",
      cssVariable: "--font-roboto"
    }]
  },
  devToolbar: {
    enabled: false
  }
});