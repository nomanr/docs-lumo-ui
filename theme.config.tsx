import { DocsThemeConfig } from "nextra-theme-docs";
import React, { ReactElement, ComponentProps } from "react";

export const Logo = (props: ComponentProps<"svg">): ReactElement => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <svg
      width="24"
      height="24"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38 0C17.0132 0 0 17.0132 0 38V112C0 132.987 17.0132 150 38 150H112C132.987 150 150 132.987 150 112V38C150 17.0132 132.987 0 112 0H38ZM108.5 87C96.0736 87 86 97.0736 86 109.5C86 121.926 96.0736 132 108.5 132C120.926 132 131 121.926 131 109.5C131 97.0736 120.926 87 108.5 87Z"
        fill="currentColor"
      />
    </svg>

    <span style={{ marginLeft: ".4em", fontWeight: 800 }}>lumo-ui</span>
  </div>
);

const config: DocsThemeConfig = {
  logo: Logo,

  project: {
    link: "https://github.com/nomanr/lumo-ui",
  },
  docsRepositoryBase: "https://github.com/nomanr/lumo-ui/blob/main/",
  footer: {
    content: "Lumo UI Docs © 2024",
  },
  color: {
    hue: 0,
    saturation: 0,
    lightness: {
      dark: 100,
      light: 44,
    },
  },

  // @ts-expect-error
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s – Lumo UI",
    };
  },
};

export default config;
