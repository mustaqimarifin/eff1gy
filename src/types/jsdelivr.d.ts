// First, let TypeScript allow all module names starting with "https://". This will suppress TS errors.
declare module 'https://*'
// Second, list out all your dependencies. For every URL, you must map it to its local module.
declare module 'https://cdn.jsdelivr.net/npm/@code-hike/mdx@0.7.4/dist/index.cjs.min.js' {
  //declare module 'https://cdn.jsdelivr.net/npm/@code-hike/mdx@0.7.4/dist/components.esm.mjs //declare module 'https://cdn.jsdelivr.net/npm/@code-hike/mdx@0.7.4/dist/index.min.css'
  export * from '@code-hike/mdx'
}

declare module 'https://cdn.jsdelivr.net/npm/shiki@0.11.1/dist/index.unpkg.iife.min.js' {
  //declare module 'https://cdn.jsdelivr.net/npm/@code-hike/mdx@0.7.4/dist/components.esm.mjs //declare module 'https://cdn.jsdelivr.net/npm/@code-hike/mdx@0.7.4/dist/index.min.css'
  export * from 'shiki'
}
