require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    defaultTitle: `Gatsby and WordPress Demo Starter`,
    defaultDescription: `Demo starter for combining Gatsby and WordPress. Created for the LinkedIn Learning course "Building a Headless WordPress Site with Gatsby" and based on Gatsby Default Starter by @gatsbyjs`,
    author: `@mor10`,
    siteUrl: `https://www.yourdomain.tld`,
    logo: `/logo.png`,
    twitter: `@mor10`,
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://s5042471.saturnwp.link/graphql",auth: {
        htaccess: {
          username: process.env.HTTPBASICAUTH_USERNAME,
          password: process.env.HTTPBASICAUTH_PASSWORD
        }
      }
    }
  },
  "gatsby-plugin-postcss",
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-BQ901VMMFQ"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};