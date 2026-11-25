import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://michellescaraglino.com',
  markdown: {
    // keep the copy exactly as written
    smartypants: false,
  },
})
