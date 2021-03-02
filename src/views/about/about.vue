<template>
  <div class="about">
    <Header></Header>
    <div class="container">
      <div class="aboutme">
        <h2>关于我</h2>
        <p>计算机专业在读，目前大三。</p>
        <p>写代码是「将来的」工作，也是「一如既往的」爱好。写过一些简单但有趣的程序，热衷于探索和学习各种新的技术，造轮子自娱自乐。未来的职业方向是服务端与后端开发，但对其他方向依旧抱有浓烈的好奇心。</p>
      </div>
      <div class="contactme">
        <h2>联系我</h2>
        <p>在左侧边栏中，我列出了一些我的社交媒体账号，如果你有兴趣，可以跟随链接前往。</p>
        <p>在更多的平台，如果你见到英文用户名为 Indomite，那么多半也是我。</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '__COMPONENTS__/Header'
import Footer from '__COMPONENTS__/Footer'

export default {
  name: 'About',
  components: {
    Header,
    Footer
  }
}

</script>

<style lang='less' scoped>
.container {
  margin: 0 auto;
  max-width: 960px;
}
</style>