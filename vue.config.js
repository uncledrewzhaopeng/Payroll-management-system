const path = require('path')
const webpack = require('webpack')

// 是否使用gzip
// const productionGzip = true
// 需要gzip压缩的文件后缀
// const productionGzipExtensions = ['js', 'css']

module.exports = {
  // 输出文件目录
  outputDir: 'dist',
  // 放置生成的静态资源的目录
  assetsDir: '',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  filenameHashing: true,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了。
  runtimeCompiler: true,
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // vux 相关配置,使用vux-ui
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  // 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
  configureWebpack: config => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        '_': 'lodash',
        'axios': 'axios'
      })
    )
    config.resolve.extensions.push('.less')
    config.resolve.extensions.push('.css')
    //
    config.resolve.alias.src = path.resolve(__dirname, './src/src')
    config.resolve.alias.assets = path.resolve(__dirname, './src/assets')
    config.resolve.alias.components = path.resolve(__dirname, './src/components')
    // 修改webpack config, 使其不打包externals下的资源
    // if (process.env.NODE_ENV === 'production') {
    //   // 1. 生产环境npm包转CDN
    //   config.externals = externals
    //   // 2. 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
    //   productionGzip && config.plugins.push(
    //     new CompressionWebpackPlugin({
    //       test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    //       threshold: 8192,
    //       minRatio: 0.8
    //     })
    //   )
    // }
    if (process.env.NODE_ENV === 'development') {
    }
  }
}
