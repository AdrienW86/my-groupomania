<template>
  <div>
    <Header/>
    <div class="block-post">

  

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

       <h1>Créer un post</h1>

        
        <form enctype="multipart/form-data" action="/create" method="post">
          <div class="input-group mb-3">
            <label class="new_post" for="input_text">Votre nouveau message:
            </label>
            <br />
            <input v-model="contentPost.content" class="input-text" id="input_text" type="text" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
            </div>
            <div class="custom-file">
              <input
                name="inputFile"
                type="file"
                class="btn_fichier"
                id="inputFile"
                aria-describedby="inputFileAddon"
                @change="onFileChange"
              />            
            </div>
          </div>
          <button type="submit" 
            class="btn" @click.prevent="createPost" >Envoyer 
          </button>
        </form>
      </div>
    <Footer/>
  </div>
</template>

<script>

import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {

  components: {
    Header,
    Footer  
  },

  data() {
    return {
      contentPost: {
        content: null,
        postImage: null,


      },
      msgError: ""
    };
  },
  computed: {
    
  },

  methods: {
    createPost() {

      console.log(this.contentPost);
      const newPost = new FormData();
      newPost.append("inputFile", this.contentPost.postImage);
      newPost.append("content", this.contentPost.content);
      console.log("test récup", newPost.get("inputFile"));
      console.log("test récup", newPost.get("content"));
      if (newPost.get("inputFile") == "null" && newPost.get("content") == "null") {
        let msgReturn = document.getElementById('msgReturnAPI')
        msgReturn.classList.add('text-danger')
        this.msgError = "Rien à publier";
      } else {
        axios
          .post("http://localhost:8080/api/auth/messages/new", newPost, {
            headers: {
              Authorization: "Bearer " + window.localStorage.getItem("token")
            }
          })
          .then(response => {
            //Si retour positif de l'API reload de la page pour affichage du dernier post
            if (response) {
              window.location.reload();
            }
          })
          .catch(error => (this.msgError = error));
      }
    },
    onFileChange(e) {
      console.log(e);
      this.contentPost.postImage = e.target.files[0] || e.dataTransfer.files;
      console.log(this.contentPost.postImage);
    }
  },
mounted() {  
  
  
}
};
</script>

<style scoped lang="scss">

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

    &:hover {
       transform: scale(1.1);
    }

    span {
      display: inline-block;
      vertical-align: center;
      position: relative;
      top: 30px;
      color:rgb(11, 11, 124);
    }
  }
}

h1{
  color: rgb(255, 255, 255)
}

label.new_post{
  color: rgb(255, 255, 255);

}

.input-text {
  width: 80%;
  margin-top: 20px;
  margin-bottom: 20px;
}

input {
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}



</style>