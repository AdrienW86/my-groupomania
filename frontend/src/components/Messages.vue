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
            <h2>Titre</h2>
            <input v-model="message.title" class="post_title" placeholder="Titre du message" type="text"/>
              <h2> Message </h2>
              <input v-model="message.content" class="post_content" placeholder="Message" type="text">
          </section>
          <section class="post_image">            
            <h2> Votre image (facultatif) </h2>
              <input  type="file" class="post_image" id="file-selector"
                aria-describedby="inputImage" @change="changeImage()"/>           
          </section>
        <div> 
          <img v-if="message.imageUrl" :src="message.imageUrl"/>
        </div>
            <button type="submit" 
              class="btn" v-on:click="createMessage()">Envoyer 
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
        UserId: "",        
      },
  }
},

methods: {

 createMessage() {

  const MessageData = {
    title: this.message.title,
    content: this.message.content,
    attachment: this.message.attachment,
    UserId: this.message.UserId  
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
    let currentUser = localStorage.getItem('username') // Pseudo capturé 
    let userMessage = response.data.UserId 
    if (userMessage) {
      userMessage = currentUser
      console.log(userMessage)
     return userMessage 
    }
  }).catch((error) => 
    console.log(error));
   
  }

},

  
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