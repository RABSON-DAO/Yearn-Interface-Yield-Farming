import Head from "next/head";
import classes from "./layout.module.css";
import Link from "next/link";
import Header from "../header";
import Navigation from "../navigation";
import SnackbarController from "../snackbar";

export const siteTitle = "RABSON-Wallet";

export default function Layout({
  children,
  configure,
  backClicked,
  changeTheme
}) {
  return (
    <div className={classes.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Inter/Inter-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Inter/Inter-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <meta name="description" content="RABSON-Wallet" />
        <meta name="og:title" content="RABSON-Wallet" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {!configure && (
        <Navigation backClicked={backClicked} changeTheme={changeTheme} />
      )}
      <div className={classes.content}>
        {!configure && (
          <Header backClicked={backClicked} changeTheme={changeTheme} />
        )}
        <SnackbarController />
        <main>{children}</main>
      </div>
    </div>
  );
}
