/* eslint-disable @typescript-eslint/no-var-requires */

import { serialize } from 'next-mdx-remote/serialize'
import reLINK from 'rehype-autolink-headings'
import reCODE from 'rehype-code-titles'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { BUNDLED_LANGUAGES, getHighlighter } from 'shiki'

const linkifyRegex = require('remark-linkify-regex')
const rehypePrettyCode = require('rehype-pretty-code')

import { schema } from '.'

const options = {
  theme: {
    dark: 'poimandres',
    light: 'slack-ochin',
  },
  onVisitLine(node) {
    //^ Prevent lines from collapsing in `display: grid` mode, and
    //^ allow empty lines to be copy/pasted

    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word']
  },
  getHighlighter: (options) =>
    getHighlighter({
      ...options,
      langs: [...BUNDLED_LANGUAGES],
    }),
}
export async function mdxToCode<T>(text: string) {
  const source = await serialize(text, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i)],
      rehypePlugins: [
        rehypeSlug,
        reCODE,
        [rehypePrettyCode, options],
        [
          reLINK,

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

  const { compiledSource } = source

  return {
    source: { compiledSource },
  }
}

/* const slacker = readFileSync('./src/assets/themes/slackD.json', {
  encoding: 'utf-8',
})
const fuckSlack = JSON.stringify(slacker) */

/* async function loadSampleFile() {
  const kusTem = await fs.readFile('../assets/themes/moonlight-ii.json', {
    encoding: 'utf-8',
  })
  console.log(fileContent)
}

 getHighlighter: async (options) =>
    await getHighlighter({
      ...options,
      theme: await loadTheme('/src/assets/themes/moonlight-ii.json'),
      langs: ['bash', 'graphql', 'js', 'jsx', 'mdx', 'sql', 'tsx', 'scss'],
      paths: './src/assets/languages/*.json',

   
    }),
 */
/* theme: {
  dark: 'slack-dark',
  light: 'slack-ochin',
}, */
/* const options = {
  theme: {
    dark: JSON.parse(
      fs.readFileSync('./src/assets/themes/slackD.json', 'utf-8')
    ),
    light: JSON.parse(
      fs.readFileSync('./src/assets/themes/slackL.json', 'utf-8')
    ),
  },
  getHighlighter: (options) =>
    getHighlighter({
      ...options,
      langs: [...BUNDLED_LANGUAGES],
    }),
} */
