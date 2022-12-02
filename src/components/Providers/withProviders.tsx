
import { Providers } from '~/components/Providers'

export function withProviders(fn: Function) {
  return function withPage(page) {
    return <Providers pageProps={page.props}>{fn(page)}</Providers>
  }
}
