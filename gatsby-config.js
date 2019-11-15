/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: `Alexander Pomazan - Frontend developer`,
    description: `My name's Alex, I am a professional frontend developer and I create applications for the web`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-linaria`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
  pathPrefix: "/my-page",
}
