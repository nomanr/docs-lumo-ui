import { AppProps } from "next/app";
import Head from "next/head";
import "nextra-theme-docs/style.css";
import "../styles.css";
import { Analytics } from "@vercel/analytics/react";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
