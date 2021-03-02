<template>
  <div class="tag">
    <Header></Header>
    <div class="container">
      <h1>标签</h1>
      <div :data="tagList">
        <ul class="aside-content">
          <li v-for="item in tagList" :key="item.id">
            <div class="tag">{{item.name}}</div>
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
  name: 'Tag',
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
      tagList: []
    }
  },
  created () {
    this.getTagList()
  },
  methods: {
    async getTagList () {
      const { data: res } = await this.$http.get('tag', { params: this.queryInfo })
      console.log(res);
      if (res.status !== 200) return alert('标签列表获取失败')
      this.tagList = res.data.data
      console.log(this.tagList);
    },
  }
}

</script>

<style lang='less' scoped>
.container {
  margin: 0 auto;
  max-width: 960px;
}
</style>
