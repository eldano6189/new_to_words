import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../../lib/gtag";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          {/* Google console */}
          <meta
            name="google-site-verification"
            content="EVgx7zt4SCBzaMv7Ak_Zm7Qvlcz4oIhou9wy17a5JME"
          />

          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="NewToWords - The Home of Spelling. We believe that great education is powerful, hard work is important, and consistent results are essential."
          />
          <meta name="author" content="Daniel Hall" />
          <meta
            name="keywords"
            content="Mathematics,Knowledge,Studying,Practicing,Results,Children,Addition,Subtraction,Multiplication,Division,Foundations,Creating,Positive,Incentivised,Learning,Development"
          />
          <meta property="og:site_name" content="newtowords.com" />
          <meta
            property="og:title"
            content="NewToWords - The Home of Spelling"
          />
          <meta property="og:url" content="https://newtowords.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="NewToWords - The Home of Spelling. We believe that great education is powerful, hard work is important, and consistent results are essential."
          />
          <meta
            property="og:image"
            content="https://newtowords.com/favicon.ico"
          />
          <meta property="og:locale" content="en_US" />
          <link rel="canonical" href="https://newtowords.com/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
