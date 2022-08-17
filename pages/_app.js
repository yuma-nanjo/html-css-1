import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>BBアシスタントカンパニー</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
