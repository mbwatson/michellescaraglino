import { defineCollection } from 'astro:content'
import { file, glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { parse } from 'yaml'

// hair.md, styling.md, policy.md, covid.md
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content' }),
})

const testimonials = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    order: z.number(),
  }),
})

// hair-services.yaml is a plain list, so number its items to give them ids and keep their order
const hairServices = defineCollection({
  loader: file('./src/content/hair-services.yaml', {
    parser: (text) => parse(text).map((service, i) => ({ id: String(i), ...service })),
  }),
  schema: z.object({
    name: z.string(),
    price: z.string(),
  }),
})

export const collections = { pages, testimonials, hairServices }
