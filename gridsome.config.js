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
  transformers: {
    remark: {
      plugins: [
        'remark-unwrap-images'
      ]
    }
  },
  templates: {
    CuisinePost: '/cuisines/:title'
  },
  icon: {
    favicon: {
      src: './src/favicon.png',
      sizes: [16, 32, 96]
    },
    touchicon: {
      src: './src/facicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true
    }
  }
}
