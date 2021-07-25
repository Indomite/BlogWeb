<template>
  <div class="header">
    <div class="nav">
      <ul>
        <li>
          <a href="#/">主页</a>
        </li>
        <li>
          <a href="#/article">博客</a>
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
        <li>
          <a href="mailto:Indomite@163.com"><EmailSVG /></a>
        </li>
        <li>
          <a href="https://github.com/Indomite"><GitHubSVG /></a>
        </li>
        <li>
          <a href="http://blog.indomite.top/admin"><LoginSVG /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import EmailSVG from "__SVG__/email.svg";
import GitHubSVG from "__SVG__/github.svg";
import LoginSVG from "__SVG__/login.svg";

export default {
  components: {
    EmailSVG,
    GitHubSVG,
    LoginSVG,
  },
};
</script>

<style lang='less' scoped>
.header {
  display: flex;
  justify-content: space-between;
  .nav ul {
    padding: 0;
    display: flex;
    justify-content: space-around;
    li {
      padding: 0 1em;
      word-break: keep-all;
    }
  }
  .link ul {
    display: flex;
    svg {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 2rem;
      cursor: pointer;
    }
  }
}
</style>
