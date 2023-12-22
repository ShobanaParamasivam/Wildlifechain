/* eslint-disable react/display-name */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="shortcut icon"
            href="https://blogger.googleusercontent.com/img/a/AVvXsEj_lmI-o2Rd8VTqLqqkWy3G_kcqkGWa1kJwzLdEwzKQ1RooJMKnha1p2_bcAZRh2g0-RvemjLBjCuQcbfthC-2BIMVtmxq0cBd4YYRgltyr31n5HbB1l7INu0KIwjiEMythcaITkrxFle-yc5FyMFAXS-zDTvUTBO50vYxbm-f92-ib9aDODGfnwvJEi_Q"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="A nft marketplace to trade digital assets."
          />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://blogger.googleusercontent.com/img/a/AVvXsEj_lmI-o2Rd8VTqLqqkWy3G_kcqkGWa1kJwzLdEwzKQ1RooJMKnha1p2_bcAZRh2g0-RvemjLBjCuQcbfthC-2BIMVtmxq0cBd4YYRgltyr31n5HbB1l7INu0KIwjiEMythcaITkrxFle-yc5FyMFAXS-zDTvUTBO50vYxbm-f92-ib9aDODGfnwvJEi_Q"
          />
          <meta
            property="og:title"
            content="NFT Marketplace"
          />
          <meta
            property="og:description"
            content="A NFT marketplace to trade your digital assets."
          />
          <meta
            property="og:url"
            content="www.google.com"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createCache({ key: 'css', prepend: true });
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
