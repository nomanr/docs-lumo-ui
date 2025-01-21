import { AppProps } from "next/app";
import "nextra-theme-docs/style.css";
import "../styles.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="510c18cc-d810-4543-b266-5701963fce76"
      />
    </>
  );
}
