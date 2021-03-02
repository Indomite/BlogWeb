<template>
  <div>
    <Header></Header>
    article
    <Footer></Footer>
    </div>
</template>

<script>
import Header from '__COMPONENTS__/Header'
import Footer from '__COMPONENTS__/Footer'

export default {
  name: 'Artice',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      queryInfo: {
        keyword: '',
        pageIndex: 1,
        pageSize: 5
      },
      total: 0,
      articleList: []
    }
  },
  created () {
    this.getArticleList()
  },
  methods: {
    async getArticleList () {
      const { data: res } = await this.$http.get('article', { params: this.queryInfo })
      if (res.status !== 200) return alert('用户列表获取失败')
      this.articleList = res.data.data
      this.total = res.data.totalCount
    },
  }
}

</script>

<style lang='less' scoped>

</style>
