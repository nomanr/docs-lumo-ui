/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://lumo.nomanr.com",
  generateRobotsTxt: true,
  exclude: ["*/_meta"],
};
