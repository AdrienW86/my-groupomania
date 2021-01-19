<template>
  <div>
    <div class="block-post">
      <h1>Créer un post</h1>
      
      <form enctype="multipart/form-data" action="/create" method="post">
        <div class="input-group mb-3">
          <label class="new_post" for="input_text">Votre nouveau message:</label>
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
        <button type="submit" class="btn" @click.prevent="createPost" >Envoyer </button>
       
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "CreatePost",
  data() {
    return {
      contentPost: {
        content: null,
        postImage: null
      },
      msgError: ""
    };
  },
  computed: {
    ...mapState(["user", "editOption"])
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
  }
};
</script>

<style scoped lang="scss">

h1{
  color: rgb(5, 5, 116)
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
.btn {
  background: rgb(228, 238, 90)
}
.btn {
  background: rgb(35, 38, 197)
}
</style>