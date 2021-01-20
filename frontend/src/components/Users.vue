<template>
    <div id="table_user">
      <Header/>      
        <section class="router">
          <div class="router_link"> <router-link to="/messages"> <span class="router_link-txt"> Messages </span> </router-link> </div>
          <div class="router_link"> <router-link to="/users"> <span class="router_link-txt"> Membres </span> </router-link> </div>
          <div class="router_link"> <router-link to="/profil"> <span class="router_link-txt"> Mon Profil </span> </router-link> </div>
        </section>
      <h1>  Nos membres        
      </h1>
        <h2> Rechercher un utilisateur 
        </h2>  
        <input type="search" @keyup="search()" id="recherche" />
      <div class="user-infos" >    
        <li v-for="user in users" :key="user.id">
          <div class="pseudo">
            <span class="infos">{{user.username}} </span>
          </div> 
          <div class="bio">
            <span class="infos">{{user.bio}} </span>
          </div>
          <div class="inscription">
            <span class="infos">  Incris depuis: {{user.createdAt}} </span>
          </div>
          <div class="voir_membre">
            <button class="see_user" @click="getOneUser()"> Voir </button>
          </div>
        </li>
      </div>
      <Footer/>
    </div>                                            
</template>

<script>
const axios = require('axios');

import Header from "../components/Header";
import Footer from "../components/Footer";

export default {

name: "Users",
components: {
  Header,
  Footer
  
    
},

data() {
    return {  
    
 
          
          users: []
}},

methods: {
  
search () {
    document.getElementById('recherche').addEventListener('keyup', function() {
    var recherche = this.value.toLowerCase();
    var documents = document.querySelectorAll('.infos');
 
    Array.prototype.forEach.call(documents, function(document) {
      // On a bien trouvé les termes de recherche.
      if (document.innerHTML.toLowerCase().indexOf(recherche) > -1) {
        document.style.display = 'block';
      } else {
        document.style.display = 'none';
      }
    });
  });
},

getOneUser() {

},



},


mounted() {
   

    axios
    .get("http://localhost:8080/api/auth/all").then((response) => {
        this.users = response.data
    }, (response) => {
      console.log(response.data)
    })
  }
}



</script>

<style scoped lang="scss">

h1 {
  color: rgb(255, 255, 255); 
}

h2 {
  color: white;
}

.router {
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  margin-bottom: 50px;
  margin-top: 50px;

  .router_link {
    font-weight: bold;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 100%;
    height: 80px;
    width: 80px;
    box-shadow: 1px 5px 16px 10px rgba(187, 183, 183, 0.4);
    background-image: radial-gradient(farthest-corner at 60px 60px,
      #f35 0%, rgb(202, 200, 228) 100%);
      
      &:hover {
       transform: scale(1.1);
      }

  .router_link-txt {
      display: inline-block;
      vertical-align: center;
      position: relative;
      top: 30px;
      color:rgb(11, 11, 124);
    }
    
    

  }
}


li{
  display:flex;
  list-style: none;
  color: rgb(253, 253, 253);  
  border: 2px solid white;
  height: 70px;
  
    .pseudo {
      width: 33%;
      font-weight: bold;
      text-align: left;
      padding-left: 2%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; 
    }
.see_user {
  background:rgb(252, 252, 252);
  color: blue;
  font-weight: bold;

    &:hover {
       transform: scale(1.1);
       color: red
      }
}

 /* border: 2px solid black;*/
}


input {
  margin-bottom: 30px;
}

.bio {
  width:50%;
  
  overflow: hidden;
  text-overflow: ellipsis;
    
  
      
  
}

span {
 position: relative;
 top: 10px;
}
</style>

