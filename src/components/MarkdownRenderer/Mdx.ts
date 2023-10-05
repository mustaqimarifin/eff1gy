import { join } from 'path'
import { cwd } from 'process'
import { bundleMDX } from 'mdx-bundler'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

//import moonlight from '~/styles/nord.json'
import imageMetadata from './image-metadata'

//import { options as ShikiOptions } from './Shiki'

export async function mdxToCode(text: string) {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = join(
      cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = join(
      cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }

  const phoptions: Options = {
    theme: 'nord',
    keepBackground: false,
    filterMetaString: (string) => string.replace(/filename="[^"]*"/, ''),
    onVisitLine(node) {
      // Prevent lines from collapsing in `display: grid` mode, and allow empty
      // lines to be copy/pasted
      if (node.children.length === 0) {
        node.children = [{ type: 'text', value: ' ' }]
      }
    },
    onVisitHighlightedLine(node) {
      node.properties?.className?.push('line--highlighted')
    },
    onVisitHighlightedChars(node) {
      node.properties.className = ['word--highlighted']
    },
  }

  const { code } = await bundleMDX({
    source: text,
    // mdx imports can be automatically source from the components directory
    //cwd: join(cwd(), 'components'),
    mdxOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.

      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        /*  [
          remarkCodeHike,
          {
            autoImport: false,
            lineNumbers: false,
            showCopyButton: true,
            theme: moonlight,
          },
        ], */
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),

        [rehypePrettyCode, phoptions],
        imageMetadata,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ]

      return options
    },
  })
  /* const source = await serialize(text, {
    mdxOptions: {
      useDynamicImport: true,
      remarkPlugins: [
        remarkGfm,
        linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i),
        [
          remarkCodeHike,
          {
            autoImport: false,
            theme: theme2,
            lineNumbers: true,
            showCopyButton: true,
            skipLanguages: false,
          },
        ],
      ],
      rehypePlugins: [
        rehypePresetMinify,
                 [rehypePrettyCode, options],
         rehypeSlug,
        [
          rehypeAutolinkHeadings,
          { behavior: 'wrap' },
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
      format: 'mdx',
    },
  })
   */

  //const { compiledSource } = source

  return {
    mdx: code,
  }
}
