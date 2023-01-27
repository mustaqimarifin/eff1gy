import darkTheme from '~/styles/moon.json'
//import lightTheme from '~/styles/monochrome-light.json'

export const options = {
  // Use one of Shiki's packaged themes
  theme: darkTheme,
  // Or your own JSON theme
  /*   theme: JSON.parse(
    fs.readFileSync(require.resolve('./themes/dark.json'), 'utf-8')
  ), */
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
  onVisitHighlightedLine(node: { properties: { className: string[] } }) {
    // Each line node by default has `class="line"`.
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node: { properties: { className: string[] } }) {
    // Each word node has no className by default.
    node.properties.className = ['word']
  },
}
