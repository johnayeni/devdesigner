module.exports = {
  plugins: [
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Devdesigner`,
        short_name: `devdesigner`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#429e9d`,
        display: `standalone`,
        icon: `src/gatsby-theme-blog/assets/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146323576-1",
        head: true,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Dev Designer Blog`,
    author: `John Ayeni`,
    description: `I post articles on Front-end tech and other experiences I have in the tech space.`,
    social: [
      {
        name: `Portfolio`,
        url: `https://johnayeni.github.io/portfolio/`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/johnayeni_`,
      },
      {
        name: `Github`,
        url: `https://github.com/johnayeni`,
      },
    ],
  },
}
