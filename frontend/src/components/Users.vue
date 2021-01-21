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
          <div class="present">
            <div class="pseudo">
              <span class="infos">{{ user.username }} </span>
            </div>

            <div class="inscription">
              <span class="infos"> Membre depuis: {{ user.createdAt }} </span>
            </div>
          </div>
          <div class="voir_membre">
            <button class="see_user" @click="getOneUser()">Voir</button>
          </div>
        </section>
        <section class="about_user">
          <div class="bio">
            <span class="infos">{{ user.bio }} </span>
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

    getOneUser() {},
  },

  mounted() {
    axios
      .get("http://localhost:8080/api/auth/all")
      .then((response) => {
        this.users = response.data;
        for (let i = 0; i < this.users.length; i++) {
          console.log(this.users[i].createdAt);
          this.users[i].createdAt = this.users[i].createdAt.replace("T", " à ");
          this.users[i].createdAt = this.users[i].createdAt.replace(
            ".000Z",
            ""
          );
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
  flex-direction: column;
  list-style: none;
  color: rgb(253, 253, 253);
  border: 2px solid white;
  height: 150px;
  width: 100%;

  .identity {
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
    width: 85%;
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

  .voir_membre {
    width: 15%;
   

    .see_user {
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

