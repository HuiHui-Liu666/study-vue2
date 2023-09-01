<template>
  <div id="app">
    <button @click="handleChange">隐藏/显示</button>
    <transition enter-active-class="animated bounce" leave-active-class="animated bounceOutRight">
      <HelloWorld msg="Welcome to Your Vue.js App" v-show="flag" />
    </transition>
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    handleChange() {
      this.flag = !this.flag;
      console.log("this.flag:>> ", this.flag);
    },
  },
};
</script>
<style lang="scss">
.liu-enter-active,
.liu-leave-active {
  // opacity: 1;
  transition: opacity 0.5s;
}

.liu-enter,
.liu-leave-to {
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
