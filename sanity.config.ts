import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { markdownSchema } from 'sanity-plugin-markdown'

import { schemaTypes } from './schemas'
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'
export default defineConfig({
  name: 'default',
  title: 'studioOlive',
  basePath: '/studio',
  projectId: 'do33z8xq',
  dataset: 'production',
  plugins: [
    structureTool(),
    markdownSchema(),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
})
