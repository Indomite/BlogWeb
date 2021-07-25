<template>
  <div class="root">
    <nav>
      <h1>Indomite's space</h1>
      <p>永远年轻 永远热泪盈眶</p>
    </nav>
    <div class="items">
      <div class="item">
        <a href="#/article">技术博客</a>
      </div>
      <div class="item">
        <a href="https://github.com/Homyit-Studio">宏奕工作室</a>
      </div>
      <div class="item">
        <a href="https://www.cnblogs.com/Indomite">博客园</a>
      </div>
      <div class="item">
        <a href="https://github.com/Indomite">GitHub</a>
      </div>
      <div class="item">
        <a href="#/about">关于我</a>
      </div>
    </div>
    <footer>赣ICP备 2021001928号 - 1</footer>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style lang='less' scoped>
.root {
  min-width: 320px;
  text-align: center;
}

nav > p {
  font-size: 12px;
  letter-spacing: 5px;
  font-weight: 200;
  width: 100%;
  text-align: center;
}

.items {
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation-name: fadeIn; /*动画名称*/
  animation-duration: 3s; /*动画持续时间*/
  animation-iteration-count: 1; /*动画次数*/
  animation-delay: 0s; /*延迟时间*/
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  33% {
    opacity: 0.33; /*中间状态 透明度为0*/
  }
  67% {
    opacity: 0.67; /*中间状态 透明度为0*/
  }
  100% {
    opacity: 1; /*结尾状态 透明度为1*/
  }
}

.item {
  padding: 15px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
}

footer {
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 200;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
</style>
