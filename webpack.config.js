module.exports = function (webpackConfig) {
  webpackConfig.module.loaders.forEach(function (item) {
    if (item.loader.indexOf('css?sourceMap')) {
      item.loader = item.loader.replace('css?sourceMap',
        'css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]');
    }
  });
  webpackConfig.module.loaders.push({
    test: /\.html?$/,
    loader: 'file?name=[name].[ext]',
  });
  return webpackConfig;
};
