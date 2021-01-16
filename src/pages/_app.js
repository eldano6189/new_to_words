import "./globals.css";
import Data from "../data/states/globalStates";
import Header from "../components/header/header";
import SideBar from "../components/sidebar/sideBar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../../lib/gtag";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Data>
        <Header />
        <SideBar />
        <Component {...pageProps} />
      </Data>
    </div>
  );
};

export default App;
