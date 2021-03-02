<template>
  <div>
    <Header></Header>
    欢迎来到我的博客中心
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '__COMPONENTS__/Header'
import Footer from '__COMPONENTS__/Footer'

export default {
  name: 'Index',
  components: {
    Header,
    Footer
  }
}

</script>

<style lang='less' scoped>

</style>
