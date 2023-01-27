import { PrismLight as Shh } from 'react-syntax-highlighter'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import graphql from 'react-syntax-highlighter/dist/esm/languages/prism/graphql'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'
import sql from 'react-syntax-highlighter/dist/esm/languages/prism/sql'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

Shh.registerLanguage('tsx', tsx)
Shh.registerLanguage('graphql', graphql)
Shh.registerLanguage('typescript', typescript)
Shh.registerLanguage('scss', scss)
Shh.registerLanguage('bash', bash)
Shh.registerLanguage('markdown', markdown)
Shh.registerLanguage('sql', sql)
Shh.registerLanguage('json', json)

//export const syntaxTheme = matLight

export function CodeBlock({
  text,
  language,
  ...rest
}: {
  text: string
  language: string
  [key: string]: any
}) {
  return (
    <Shh
      showLineNumbers={false}
      useInlineStyles={true}
      language={language}
      children={text}
      style={materialOceanic}
      wrapLongLines
      {...rest}
    />
  )
}
