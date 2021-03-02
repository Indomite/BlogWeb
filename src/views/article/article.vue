<template>
  <div>
    <Header></Header>
    <div class="container">
      <h1>Indomite 的技术博客</h1>
      <div class="content">
        <ul>
          <li v-for="item in articleList" :key="item.id">
            <h3>{{item.headline}}</h3>
            <span>{{item.user_id}}</span><span>{{item.create_time}}</span>
            <div v-html="item.content" v-highlight></div>
          </li>
        </ul> 
      </div>
    </div>
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
        pageSize: 10
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
      console.log(res);
      if (res.status !== 200) return alert('用户列表获取失败')
      this.articleList = res.data.data
      this.total = res.data.totalCount
    },
  }
}

</script>

<style lang='less' scoped>
.container {
  margin: 0 auto;
  max-width: 960px;
  h1 {
    text-align: center;
  }
  article {
    padding-bottom: 2rem;
    border-bottom: 1px solid #eee;
  }
}
</style>
