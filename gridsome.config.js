// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Lanef Passion',
  titleTemplate: "%s - Lanef Passion",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'CuisinePost',
        path: './content/cuisines/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PartenairePost',
        path: './content/partenaires/**/*.md',
      }
    }
  ],
  templates: {
    CuisinePost: '/cuisines/:title'
  },
}
