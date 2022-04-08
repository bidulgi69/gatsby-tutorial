import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `dove-demo`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `/Users/bidulgi69/Documents/github/gatsby/dove-demo/blog`,
      }
    },
    "gatsby-plugin-mdx"
  ],
}

export default config
