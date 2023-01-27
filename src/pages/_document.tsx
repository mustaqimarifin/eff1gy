import Document, { Head, Html, Main, NextScript } from 'next/document'
//import Script from 'next/script'

class MyDocument extends Document {
  /*   static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  } */
  render() {
    return (
      <Html lang="en">
        <Head>
          {/*           <Script
            data-website-id="588c3922-1f46-48a7-b0f3-0f2341bc7950"
            src="https://umami-sandy-chi.vercel.app/pagoda.js"
            strategy="worker"
          ></Script> */}
        </Head>

        <body>
          <span className="text-tertiary absolute flex -translate-y-full transform space-x-1 border-b border-gray-150 bg-white p-2 focus-within:relative focus-within:translate-y-0 dark:border-gray-800 dark:bg-gray-1000">
            <a className="text-primary font-semibold" href="#main">
              Skip to content
            </a>
            <span>(if available)</span>
            <span>or</span>
            <a className="text-primary font-semibold" href="#list">
              jump to list
            </a>
            <span>(if available)</span>
          </span>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
