<template>
  <div class="header">
      <div class="nav">
          <ul>
              <li>
                <a href="/">主页</a>
              </li>
              <li>
                <a href="#/article">文章</a>
              </li>
              <li>
                <a href="#/tag">标签</a>
              </li>
              <li>
                <a href="#/about">关于</a>
              </li>
          </ul>
      </div>
      <div class="link">
          <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
      </div>
  </div>
</template>

<script>

export default {
    components: {}
}

</script>

<style lang='less' scoped>
.header {
    display: flex;
    padding: 1rem 4rem;
    background: #eee;
    .nav ul {
        display: flex;
        li {
            margin-right: 2.5rem;
        }
    }
    .link ul {
        display: flex;
    }
}
</style>
