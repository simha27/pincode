module.exports = {
  siteMetadata: {
    title: `Indiapost Pincode`,
    description: `Indiapost Pincode is a website which provides the pincode details of more than 780,000 Localities, Villages, Towns, Cities In India.`,
    keywords: [`pincode-search`, `india-pincode-search`, `indiapost-pincode-find`],
    author: `Indiapost-Pincode`,
    siteUrl: `https://indiapostpincode.in`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `All India Statewise Pincode`,
        link: `/all-india-statewise-pincode`,
        type: `internal`, //internal or anchor
      },
      {
        name: `About Us`,
        link: `/about-us`,
        type: `anchor`, //internal or anchor
      },
      {
        name: `Privacy Policy`,
        link: `/privacy-policy`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Terms & Condition`,
        link: `/terms-condition`,
        type: `internal`, //internal or anchor
      }
        
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `simha0427@gmail.com`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://twitter.com/NNRHYD`,
        location: `header`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/ehowey`,
        location: `all`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        //Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // displaySiteLogo: true,
        // displaySiteTitle: true,
        // displaySiteLogoMobile: true,
        // displaySiteTitleMobile: true,
        // invertLogo: false,
        // useStickyHeader: false,
        // useSocialLinks: true,
        // useColorMode: true,
        // footerContentLocation: "left", // "left", "right", "center"
        // remarkImagesWidth: 1440,
      },
    },
    `gatsby-theme-catalyst-header-top`, // Try `gatsby-theme-catalyst-header-side`
    `gatsby-theme-catalyst-footer`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
