<template>
  <div>
    <Header></Header>
    tag
    <Footer></Footer>
    </div>
</template>

<script>
import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
      if (res.status !== 200) return alert('用户列表获取失败')
      this.tagList = res.data.data
    },
  }
}

</script>

<style lang='less' scoped>

</style>
