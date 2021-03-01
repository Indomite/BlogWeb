const svgRule = config.module.rule('svg');
svgRule.uses.clear();
svgRule
  .use('babel-loader')
  .loader('babel-loader')
  .end()
  .use('vue-svg-loader')
  .loader('vue-svg-loader')
  .options({
    svgo: {
      plugins: [
        { removeDoctype: true },
        { removeComments: true },
        { removeViewBox: false }
      ],
      removeViewBox: false,
    },
    .end()
  })