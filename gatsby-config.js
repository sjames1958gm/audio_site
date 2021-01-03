module.exports = {
  siteMetadata: {
    title: "audio_site",
    siteUrl: "https://audio_sitemain.gtsb.io",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken:
          "19a17add415fafe92e08f6a04e95573780bd37ac674a4476f8e8d25b780210d1",
        spaceId: "ji85scmsrspw",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
