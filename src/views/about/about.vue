<template>
  <div class="about">
    <Header></Header>
    <div class="container">
      <div class="aboutme">
        <h2>Indomit's Blog</h2>
        <h4>永远年轻，永远热泪盈眶</h4>
        <p>2018年9月入学，参加了为期一年的Homyit工作室的培训</p>
        <p>2019年5月，完成考核，以后端开发加入Homyit工作室</p>
        <p>2019年7月，为期一个月的集训，完成集训任务</p>
        <p>2019年9月，开始招新宣讲</p>
        <p>2019年11月，着力于前端方向</p>
        <p>2019年12月，当选Homyit工作室负责人</p>
        <p>2020年4月，完成新生培训计划、培训项目</p>
        <p>2020年5月，结束为期一年的新生培训</p>
        <p>2020年7月-8月，带新生集训一个月</p>
        <p>2020年10月，总结技术栈</p>
        <p>2021年2月，开始着力春招</p>
        <p>2021年4月，中旬入职滴滴出行网约车技术</p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "__COMPONENTS__/Header";
import Footer from "__COMPONENTS__/Footer";

export default {
  name: "About",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang='less' scoped>
.container {
  margin: 0 auto;
  max-width: 960px;
  min-width: 320px;
  text-align: center;
}
</style>