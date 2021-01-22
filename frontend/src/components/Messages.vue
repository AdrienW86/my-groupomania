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
            <input v-model="message.title" class="post_title" placeholder="Titre du message" type="text"/>
              <h2> Message </h2>
              <input v-model="message.content" class="post_content" placeholder="Message" type="text">
          </section>
          <section class="post_image">            
            <h2> Votre image (facultatif) </h2>
              <input  type="file" class="post_image" id="inputFile"
                aria-describedby="inputImage" @change="changeImage()"/>           
          </section>

        <div> 
          <img v-if="message.imageUrl" :src="message.imageUrl"/>
        </div>
            <button type="submit" 
              class="btn" v-on:click="createMessage()" >Envoyer 
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
  name: "Messages",

  components: {
    Header,
    Menu,
    AllMessages,
    Footer,
      
  },

  data() {
    return {
      message: {
        title: "",
        content:"",
        attachment:"",
        
      },
  }
},

methods: {

 createMessage() {

  const MessageData = {
    title: this.message.title,
    content: this.message.content,
    attachment: this.message.attachment,
  };

      if (this.message.content == null || this.message.title == null) {
          window.alert('saisies invalides')
      }else{

        axios
          .post("http://localhost:8080/api/auth/messages/new", MessageData,
      { 
            headers :{
              Authorization: "Bearer "+ localStorage.getItem("key"),
      },
    }
  ).then((response) => {
    if (response) {
     console.log(this.response)
    }
  }).catch((error) => 
    console.log(error));
   
  }

},





},








/*
onFileSelected(event) {
    this.selectedFile = event.target.files[0]
  },
  

  sendNewContent() { 
    let regex = /^[^=*<>{}]+$/;
    this.msgError ="";
    let error;
    

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

 
 */   
  

    

    

 
   
  
    
  
mounted() { 
  




}
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