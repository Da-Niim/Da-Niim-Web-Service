import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document"
import { extractCritical } from "@emotion/server"

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style data-emotion-css={styles.ids.join(" ")} dangerouslySetInnerHTML={{ __html: styles.css }} />
        </>
      ),
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
