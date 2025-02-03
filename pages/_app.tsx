import { AppProps } from "next/app";
import "nextra-theme-docs/style.css";
import "../styles.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Umami from "@components/Umami";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
      <Umami />
    </>
  );
}
