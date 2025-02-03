import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",

  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: "slack-dark",
        light: "slack-ochin",
      },
    },
  },
});

export default withNextra();
