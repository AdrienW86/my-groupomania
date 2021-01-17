<template>
  <div id="table_user">
    <h2>Liste des utilisateurs</h2>

    <button @click="getAllUsers()">Voir les utilisateurs</button>

    
    <UserDetails />
  </div>
</template>

<script>
const axios = require("axios");

import UserDetails from "./UserDetails";
export default {
  name: "Users",

  components: {
    UserDetails,
  },

  async data() {
    return {
      userProfil: {
        username: "",
        bio: "",
      },
    };
  },
  methods: {
    getAllUsers() {
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("key"),
        },
      };

      axios
        .get("http://localhost:8080/api/auth/all", options)
        .then((response) => {
          this.username = response.data.username;
          this.bio = response.data.bio;
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>