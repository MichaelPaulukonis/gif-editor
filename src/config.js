/* eslint-env node */

module.exports = {
  isDev: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  assetsDomain: 'https://static.webfed.cn/gif/build/'
}
