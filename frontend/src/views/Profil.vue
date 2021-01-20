<template>
    <main>
        
        <h1> Bienvenue {{  }} </h1>

        <section class="router">
            <div class="router_link"> 
                <router-link to="/messages"> 
                    <span> Messages 
                    </span> 
                </router-link> 
            </div>
            <div class="router_link"> 
                <router-link to="/users"> 
                    <span> Membres 
                    </span> 
                </router-link> 
            </div>
            <div class="router_link">
                <router-link to="/profil"> 
                    <span> Mon Profil 
                    </span> 
                </router-link> 
            </div>
        </section>

        <h2> Votre profil </h2> 

        <section class="profil_user"> 
            <div class="pseudo">              
                {{ "Big Yaso" }}                               
            </div> 
            <div class="bio">                
                {{ "bigraphie d'une belle gosse" }}                                
            </div>
            <div class="inscription">
                {{ "inscrite depuis toujours" }}                      
            </div>
            <div class="">
                <a class="btn-profil"  type="submit" @click="modify()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-pen" viewBox="0 0 16 16">
                        <path d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                    </svg> 
                </a>  
                <a class="btn-profil" type="submit" @click="deleted()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg> 
                </a>
            </div>
        </section>



    </main>
</template>

<script>
import axios from "axios";


export default {

    name: "Profil",

    components: {
        
},



data() {
    return {  
          
        userInfos : {
        email: "",
        username: "",
        password: "",
        isAdmin: "",
        bio: "",
      },
}},
methods: {

    modify() {
        console.log()
    },
    
    deleted() {
        let warning = window.confirm("Voulez-vous vraiment supprimer votre compte ? Toutes vos données seront perdues.");
            if(warning) {
                axios.
                    delete("http://localhost:8080/api/auth/me")
            }

    },

    mounted() {

    axios
    .get("http://localhost:8080/api/auth/me").then((response) => {
        this.users = response.data
        console.log(response.data) 
    })
  }
}


}
</script>


<style lang="scss" scoped>

h1 {
  color: rgb(255, 255, 255); 
}

h2 {
  color: white;
  margin-bottom: 50px;
  margin-top: 50px;
}

.profil_user {
    display: flex;
    border: 2px solid white;
    padding: 20px;
    color: white;
}

.pseudo {
    width: 15%;   
}

.bio {
    width: 65%;
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
    border-radius: 50%;
    height: 80px;
    width: 80px;
    box-shadow: 1px 5px 16px 10px rgba(187, 183, 183, 0.4);
   -moz-box-shadow: 1px 5px 16px 10px rgba(187, 183, 183, 0.4);
    -webkit-box-shadow: 1px 5px 16px 10px rgba(187, 183, 183, 0.4);
    background-image: radial-gradient(farthest-corner at 60px 60px,
      #f35 0%, rgb(202, 200, 228) 100%);;

    span {
      display: inline-block;
      vertical-align: center;
      position: relative;
      top: 30px;
      color:rgb(11, 11, 124);
    }
    

  }
}


</style>