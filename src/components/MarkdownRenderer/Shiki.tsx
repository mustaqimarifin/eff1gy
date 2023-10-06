import { readFileSync } from 'fs'
import { Options } from 'rehype-pretty-code'

//import lightTheme from '~/styles/monochrome-light.json'

export const shoptions = {
  // Use one of Shiki's packaged themes
  // Or your own JSON theme
  theme: 'slack-ochin',
  filterMetaString: (string: string) => string.replace(/filename="[^"]*"/, ''),

  // Keep the background or use a custom background color?
  keepBackground: true,

  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node: { children: string | any[] }) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedChars(node) {
    node.properties.className = ['word']
  },
} satisfies Options
