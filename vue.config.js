const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    /* 配置别名路径 */
    config.resolve.alias
    .set('__SVG__', resolve('src/assets/svg')) //svg 别名
    .set('__COMPONENTS__', resolve('src/components')) // 组件别名
    .set('__VIEWS__', resolve('src/views')) //页面别名
    .set('__STORE__', resolve('src/store')) // 状态管理别名
    .set('__ROUTER__', resolve('src/router')); //路由别名
    /** 同样是svg loader */
    config.module.rule('svg')
    .exclude.add(resolve('src/assets/svg'))
    .end();

    config.module
    .rule('svg-component') // rule 是定义一个规则的名字
    .test(/\.svg$/) // test 是匹配规则
    .include.add(resolve('src/assets/svg'))
    .end()
    .use('vue-svg-loader')
    .loader("vue-svg-loader")
    /* 配置SVG loader end */
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
}