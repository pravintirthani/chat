module.exports = (config, env) => {
    config.module.rules.push(
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]___[hash:base64:5]'
            }
          }
        ],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    )
    return config
  }