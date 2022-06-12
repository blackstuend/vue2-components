module.exports = {
  optimization: {
    minimize: true, // 打包是否包裝
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
