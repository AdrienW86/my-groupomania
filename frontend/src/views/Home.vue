<template>

  <div class="home"> 
    <Header/>

    <h1> Bienvenue <br> 
    sur my Groupomania ! </h1> 

    <section>
      <h2> Connectez-vous ou inscrivez-vous </h2>

      <p> afin de pouvoir rejoindre la communautée 
          my Groupomania déjà présent sur le site. </p>
    </section>

     <Footer/>    
  </div> 
</template>

<script>

import Header from "../components/Header";
import Footer from "../components/Footer";

export default {

  name: 'Home',

  components: {
    Header,
    Footer,       
  }
}
</script>

<style lang="scss" scoped>
 
 h1 {
   margin-top: 40px;
   padding-top: 20px;
   padding-bottom: 20px;
   color:white;
 }
</style>
