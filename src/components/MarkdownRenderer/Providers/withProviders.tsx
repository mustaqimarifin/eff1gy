import { Providers } from '~/components/MarkdownRenderer/Providers'

export function withProviders(fn: Function) {
  return function withPage(page) {
    return <Providers pageProps={page.props}>{fn(page)}</Providers>
  }
}
