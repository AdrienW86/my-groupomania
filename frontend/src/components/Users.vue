<template>
  
  

    <div id="table_user">

     <h1> Nos membres </h1>

     <h4> Rechercher un utilisateur </h4>  <input> 

      <div class="user-infos" >
    
      <li v-for="user in users" :key="user.id">

        <div class="pseudo">
         <span> {{user.username}} </span>
        </div> 

        <div class="bio">
         <span> {{user.bio}} </span>
        </div>

        <div class="inscription">
         <span> Incris depuis: {{user.createdAt}} </span>
        </div>

      </li>
      </div>
    </div>
    


              

    
          
        
       
  
</template>

<script>
const axios = require('axios');

export default {

name: "Users",
components: {
    
},

data() {
    return {  
          
          users: []
}},
mounted() {
   

    axios
    .get("http://localhost:8080/api/auth/all").then((response) => {
        this.users = response.data
    }, (response) => {
      console.log('erreur', response.data)
    })
  }
}



</script>

<style scoped lang="scss">

h1 {
  color: rgb(5, 5, 116)
  
}

h4 {
  color: white;
}

li{
  display:flex;
  list-style: none;
  color: rgb(253, 253, 253);
  margin: 4px;
  
  border-radius: 20px;
  
  
  

    .pseudo {
      width: 33%;
      font-weight: bold;
      

    }


 /* border: 2px solid black;*/
}


input {
  margin-bottom: 30px;
}

.bio {
  width:33%
}

span {
 position: relative;
 top: 10px;
}
</style>

