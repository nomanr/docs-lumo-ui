import { AppProps } from "next/app";
import "nextra-theme-docs/style.css";
import "../styles.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
