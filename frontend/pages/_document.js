import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {/* {process.env.NODE_ENV !== 'development' && (
            <script
              dangerouslySetInnerHTML={{
                __html: `if (typeof window !== "undefined") {
        // hacky force https
        if (window.location.protocol != "https:") {
          window.location.href =
            "https:" +
            window.location.href.substring(window.location.protocol.length);
        }
      }`,
              }}
            />
          )} */}

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
