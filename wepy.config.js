const path = require('path');
const db = require("./db.js");

if (process.env.ENV_CONFIG) {
  const env = require(`./config/env/${process.env.ENV_CONFIG}.js`)
  db.write(` export default { HOME_API_URL: ${env.HOME_API_URL} } `)
}

var prod = process.env.NODE_ENV === 'production';

module.exports = {
  wpyExt: '.wpy',
  eslint: true,
  cliLogs: !prod,
  static: ['static'],
  build: {
  },
  resolve: {
    alias: {
      counter: path.join(__dirname, 'src/components/counter'),
      '@': path.join(__dirname, 'src')
    },
    aliasFields: ['wepy', 'weapp'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    babel: {
      sourceMap: true,
      presets: [
        '@babel/preset-env'
      ],
      plugins: [
        '@wepy/babel-plugin-import-regenerator'
      ]
    }
  },
  plugins: [ ],
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}