<template>
  <div id="table_user">
    <Header />
    <Menu />
    <h1>Nos membres</h1>
    <h2>Rechercher un utilisateur</h2>
    <input type="search" @keyup="search()" id="recherche" />
    <div class="user-infos">
      <li class="element" v-for="user in users" :key="user.id">
        <section class="identity">          
            <div class="pseudo">
              <span class="infos">{{ user.username }} </span>
            </div>
            <div class="photo_user">  {{ "user.picture"}}
            </div>          
          </section>
          <section class="creation">
            <div class="inscription">
              <span class="infos"> Membre depuis: {{ user.createdAt }} </span>
            </div>
          <div class="bio">
            <span class="infos">{{ user.bio }} </span>
          </div>          
        </section>
        <section class="about_user">
          <div class="voir_membre">
            <button class="see_user" @click="getOneUser()"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
             </svg> 
            </button>
          </div>          
          <div class="delete_membre">
            <button class="delete_user" @click="deleteOneUser()"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg>
            </button>
          </div>
        </section>
      </li>
    </div>
    <Footer />
  </div>
</template>

<script>
const axios = require("axios");

import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default {
  name: "Users",
  components: {
    Header,
    Menu,
    Footer,
  },

  data() {
    return {
      users: [],
    };
  },

  methods: {
    search() {
      document
        .getElementById("recherche")
        .addEventListener("keyup", function () {
          let recherche = this.value.toLowerCase();
          let documents = document.querySelectorAll(".element");
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

  getOneUser() {
    axios
      .get()
  }
},

  mounted() {
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
  },
};
</script>

<style scoped lang="scss">

h1 {
  color: rgb(255, 255, 255);
}

h2 {
  color: white;
}

li {
  display: flex; 
  list-style: none;
  color: rgb(253, 253, 253);
  border: 2px solid white;
  height: 150px;
  width: 100%;

  .identity {
    display: flex;
    flex-direction: column;
    height: 60px;
    width: 30%;
    font-weight: bold;
    text-align: left;  
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .creation {
    width: 60%
  }
  .pseudo {
    height: 30px;
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .inscription {
    height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  

  .about_user {
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .voir_membre {
   
    .see_user {
      background: rgb(252, 252, 252);
      color: blue;
      font-weight: bold;
      

      &:hover {
        transform: scale(1.1);
        color: red;
      }
    }
  }
  .delete_membre {

      

    .delete_user{
      background: rgb(252, 252, 252);
      color: blue;
      font-weight: bold;
      
      

      &:hover {
        transform: scale(1.1);
        color: red;
      }
    }
  }
}

input {
  margin-bottom: 30px;
}

span {
  position: relative;
  font-size: 0.9em;
  top: 10px;
  left: 5px;
}
</style>

