<template>
  <div>
    <Header/>
    <Menu/>
      <div class="post">
       <h1>Créer un post</h1>  
        <form>
          <section class="post_message">
            <label class="new_post" for="input_text">Envoyer un nouveau message:
            </label>
            <br />
            <h2>Titre </h2>
            <input v-model="messages.title" class="post_title" placeholder="Titre du message" type="text"/>
              <h2> Message </h2>
              <input v-model="messages.content" class="post_content" placeholder="Message" type="text">
          </section>
          <section class="post_image">            
            <h2> Votre image (facultatif) </h2>
              <input name="image" type="file" class="post_image" id="inputFile"
                aria-describedby="inputImage" @change="onFileSelected()"/>           
          </section>
            <button type="submit" 
              class="btn" v-on:click="sendNewContent()" >Envoyer 
            </button>
        </form>
      </div>
      <AllMessages/>
    <Footer/>
  </div>
</template>

<script>

import axios from "axios";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import AllMessages from "../components/AllMessages";


export default {

  components: {
    Header,
    Menu,
    AllMessages,
    Footer,
      
  },

data() {
  return {
  messages :[] 
  ,

  isUserLogged: "",
  msgError: "",  
  isAdmin: "",   
  }   
},

  methods: {

    
    
  },
onFileSelected(){}
   /* onFileSelected(event) {
    this.selectedFile = event.target.files[0]
  },
  
  sendNewContent(e) { 
    let regex = /^[^=*<>{}]+$/;
    this.msgError ="";
    let error;
    e.preventDefault();

    if(this.title === "" || this.title == null) {
      error = "Titre requis";
    }else if (this.title.length <3) {
      error = "Un minimum de 3 caractères est requis";
    }else if (!regex.test(this.title)) {
      error = "Les caractères spéciaux ne sont pas autorisés";
    }

    if (this.content === "" || this.content == null) {
      error = "Aucun contenu"
    }else if (this.content.length <3) {
      error = "Un minimum de 3 caractères est requis";
    }else if (!regex.test(this.content)) {
      error = "Les caractères spéciaux ne sont pas autorisés";
    }


    if (error) {
      this.msgError = error;
    }else {
      const postData = new FormData();
      if (this.selectedFile !== undefined) {
        postData.append("image", this.selectedFile);
      }


      postData.append("title", this.title);
      postData.append("content", this.content);
      postData.append("UserId", localStorage.getItem("user"));

      axios({
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer "+ localStorage.getItem("key")
        },
        method: "post",
        url: "http://localhost:8080/api/auth/messages/new",
        data: postData
      }).then(response => {
        this.postLoading();
        if (response.status === 201) {
          return response;
        }else{
          throw (error = response);
        }
      }).catch(error => {
        this.msgError = error.response.data.error;
      });
    }
  },

  postLoading() {
    const options = {
      headers : {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("key")
      }
    };
    axios
      .get("http://localhost:8080/api/auth/messages/", options)
      .then(response => {
        this.content = response.data;
      }).catch(error => console.log(error));
  
    
  },
mounted() { 
  this.postLoading();
  this.userLogged(); */
,
mounted () {
  axios
    .get("http://localhost:8080/api/auth/messages")
    .then((response) => {
        this.messages = response.data;
        for (let i = 0; i < this.messages.length; i++) {
          console.log(this.messages[i].createdAt);
          this.messages[i].createdAt = this.messages[i].createdAt.replace("T", " à ");
          this.messages[i].createdAt = this.messages[i].createdAt.replace(".000Z","");
        } 
      })
      .catch((err) => {
        console.log(err);
      });
    },
}
</script>

<style scoped lang="scss">

h1{
  color: rgb(255, 255, 255)
}

label.new_post{
  color: rgb(255, 255, 255);
}

.input-text {
  width: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
}

input {
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

.post_title {
  height: 30px;
  width: 200px;
}
.post_content {
  height: 30px;
  width: 200px;
}

.post_image {
  margin-top : 20px;
  margin-bottom: 20px;
  margin-left: 13%;
  display: flex;
  width: 74%;
  flex-direction: column;
}
.btn {
  margin-bottom: 60px;
}


</style>