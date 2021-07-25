<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="items" v-for="item in articleList" :key="item.id">
        <div class="item">
          <span class="title">
            <a :href="'#/article/' + item.id + ''">{{ item.headline }}</a>
          </span>
          <span class="time">
            {{ rTime(item.create_time) }}
          </span>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "__COMPONENTS__/Header";
import Footer from "__COMPONENTS__/Footer";

export default {
  name: "Artice",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      queryInfo: {
        keyword: "",
        pageIndex: 1,
        pageSize: 100,
      },
      total: 0,
      articleList: null,
    };
  },
  created() {
    this.getArticleList();
  },
  methods: {
    async getArticleList() {
      const { data: res } = await this.$http.get("article", {
        params: this.queryInfo,
      });
      if (res.status !== 200) return alert("文章列表获取失败");
      this.articleList = res.data.data;
      this.total = res.data.totalCount;
    },
    rTime(date) {
      var json_date = new Date(date).toJSON();
      return new Date(new Date(json_date) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    },
  },
};
</script>

<style lang='less' scoped>
.container {
  margin-left: 10em;
  max-width: 460px;
  .items {
    padding: 0.75em 0;
    .item {
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 16px;
        font-weight: 800;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .container {
    margin-left: 6em;
    .items {
      padding: 0.5em 0;
    }
  }
}
@media screen and (max-width: 640px) {
  .container {
    margin-left: 4em;
    .items {
      padding: 0.5em 0;
    }
  }
}
@media screen and (max-width: 460px) {
  .container {
    margin-left: 2em;
    .items {
      padding: 0.5em 0;
      .item {
        .time {
          display: none;
        }
      }
    }
  }
}
</style>
