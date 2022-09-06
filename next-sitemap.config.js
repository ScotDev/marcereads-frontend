/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NODE_ENV === "production" ? process.env.PROD_SITE_URL : process.env.DEV_SITE_URL,
    generateRobotsTxt: true,
}