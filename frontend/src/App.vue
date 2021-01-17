<template>
  <div id="app">
    <div id="nav">
    <Header/>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";

import Footer from "./components/Footer";


export default {
  components: {
    Header,
    Footer,
    
    
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  

  img {
    width: 200px;
  }

    a {
    font-weight: bold;
    color: #2c3e50;

      &.router-link-exact-active {
      color: #30289e;
    }
  }
}
</style>
