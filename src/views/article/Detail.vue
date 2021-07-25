<template>
  <div>
    <Header></Header>
    <div class="content">
      <!-- <h1>{{this.detail.headline}}</h1> -->
      <p v-html="this.detail.content"></p>
      <p>{{this.detail.create_time}}</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '__COMPONENTS__/Header'
import Footer from '__COMPONENTS__/Footer'

export default {
  name: 'Detail',
  data() {
    return {
      detail: null
    }
  },
  components: {
    Header,
    Footer
  },
  created() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      var arrUrl=location.href.split("/");
      var strPage=arrUrl[arrUrl.length-1];
      console.log(strPage);
      const { data: res } = await this.$http.get(`article/${strPage}`);
      this.detail = res.data;
    }
  },
}

</script>

<style lang='less' scoped>
.content {
  margin: 0 auto;
  max-width: 768px;
}
</style>
