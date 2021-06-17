const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  },

  outputDir: path.resolve(__dirname, '../Cours/public'),
  assetsDir: './dist',
  indexPath: path.resolve(__dirname, '../Cours/templates/index.html')
}

