import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",

  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: "solarized-dark",
        light: "solarized-light",
      },
    },
  },
});

export default withNextra();
