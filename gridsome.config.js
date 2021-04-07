// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Markdown',
        path: './content/blog/**/*.md',
      },
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['article', 'picture', 'tag'],
        singleTypes: ['web-info'],
        // typeName: 'Strapi',
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: '',
        // },
      },
    },
  ],
  templates: {
    StrapiArticle: [
      {
        path: '/article/:id',
        component: './src/templates/ArticleDetail.vue',
      }
    ],
    StrapiPicture: [
      {
        path: '/picture/:id',
        component: './src/templates/PictureDetail.vue',
      }
    ],
  }
}
