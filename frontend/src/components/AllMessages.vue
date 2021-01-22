<template>
    <main>
        <h2> Chercher un message </h2>

        <input type="search" @keyup="find()" id="find" />
            <div class="message-infos">
                <li class="list" v-for="message in messages" :key="message.id">
                    <section class="content">
                        <div class="present">
                            <div class="user">
                                <span class="infos">{{ message.UserId  }} </span>
                            </div>
                             <div class="date">
                                <span class="infos"> Envoyé le: {{ message.createdAt }} </span>
                            </div>
                        </div>
                        <div class="voir_message">
                            <button class="see_message" @click="getOneMessage()">Voir</button>
                        </div>
                    </section>
                    <section class="about_message">
                        <div class="message_content">
                            <span class="infos">{{ message.content }} </span>
                        </div>
                    </section>
                </li>
            </div>
    </main>
</template>

<script>
import axios from "axios";
export default {
    name: "AllMessages",

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
    find() {
      document
        .getElementById("find")
        .addEventListener("keyup", function () {
          let recherche = this.value.toLowerCase();
          let documents = document.querySelectorAll(".list");
          Array.prototype.forEach.call(documents, function (document) {
            // On a bien trouvé les termes de recherche.
            if (document.innerHTML.toLowerCase().indexOf(recherche) > -1) {
              document.style.display = "block";
            } else {
              document.style.display = "none";
            }
          });
        });
    },
},
mounted () {
     
  axios
    .get("http://localhost:8080/api/auth/all")
    .then((response) => {
      this.users = response.data;
        for (let i = 0; i < this.users.length; i++) {         
          this.users[i].createdAt = this.users[i].createdAt.replace("T", " à ");
          this.users[i].createdAt = this.users[i].createdAt.replace(".000Z","");          
        }
      })
      .catch((err) => {
        console.log(err);
      });
  axios
    .get("http://localhost:8080/api/auth/messages")
    .then((response) => {
      this.messages = response.data;
        for (let i = 0; i < this.messages.length; i++) {         
          this.messages[i].createdAt = this.messages[i].createdAt.replace("T", " à ");
          this.messages[i].createdAt = this.messages[i].createdAt.replace(".000Z","");                                 
        } 
      })
      .catch((err) => {
        console.log(err);
      });
    }
}    
</script>

<style lang="scss" scoped>

h2 {
  color: rgb(17, 17, 119)
}

#find {
  margin-bottom: 20px;
  width: 50%;
}

li {
  display: flex;
  flex-direction: column;
  list-style: none;
  color: rgb(253, 253, 253);
  border: 2px solid white;
  height: 150px;
  width: 100%;

  .content {
    display: flex;
    height: 60px;
    width: 100%;
    font-weight: bold;
    text-align: left;
    
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .present {
    width: 84%;
  }

  .user {
    height: 30px;
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .date {
    height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .voir_message {
    width: 14%;
   
    .see_message {
      background: rgb(252, 252, 252);
      color: blue;
      font-weight: bold;
      width: 100%;

      &:hover {
        transform: scale(1.1);
        color: red;
      }
    }
  }
}
</style>