<template>
  <div>
    <p>泰国大规模新冠感染事件持续发酵</p>
    <p>曼谷取消跨年活动</p>
    <div class="change">
      <button @click="toChinese">切换成中文</button>
      <button @click="toEnglish">切换成英文</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    toChinese() {
      this.$i18n.locale = "zh";
    },
    toEnglish() {
      this.$i18n.locale = "en";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
