<template>
    <section class="connexion">
        <h1> Connectez-vous </h1>

            <form id="login">

        <label for="username"> Entrer votre pseudo </label>
          <input v-model="userInfos.username" name="username"  class="username" required>

        <label for="email"> Entrer votre adresse mail </label>
          <input v-model="userInfos.email" name="email"  class="email" required> <p> {{userInfos.email}}</p>

        <label for="password"> Entrer votre mot de passe </label>
           <input v-model="userInfos.password" name="password"  class="password" required>

            <button id='login_btn' type="submit" @click="login()"> Valider </button>
      </form>
    </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',

  data() {
    return {
        userInfos : {
        email: "",
        username: "",
        password: "",
      }
    }
  },

  methods: {

    login: async function () {
      const userData = {
        email : this.userInfos.email,
        username: this.userInfos.username,
        password : this.userInfos.password,
      };

    if( userData.email == true || userData.username == true || userData.password == true) {
        alert('Saisies invalides')
    
    }else{
      axios
        .post("http://localhost:8080/api/auth/login", userData)
        .then((response) => {
          if(response) {
            this.saveSession(response.data.token, response.data.userId);
            this.email = response.data.id.email
           
            console.log(response.data.userId)
            if (document.getElementById("div")) {
              document.getElementById("div").style.visibility ="visible";
              
            }
            
          }else{
            alert("données invalides")
          }
        }).catch((err) => console.log(err));

      } 
     
    },
    saveSession(token, userId) {
      let sessionUserData = {};
      axios
        .get("http://localhost:8080/api/auth/me" + userId, {
          headers: {
            Authorization: "Bearer" + token,
          },
        }).then((response) => {
          sessionUserData = response.data;
          if(this.staySigned) {
            localStorage.setItem("rester connecté", this.staySigned);
          }
          sessionStorage.setStorage("token", token);
          sessionStorage.setStorage("isAdmin", sessionUserData.isAdmin);
        }).catch((err) => {
          console.log(err)
        })

        
    }

  }
}

</script>

<style scoped lang="scss">

h1 {
  color:#dcdbeb;
}

label {
  color: white
}

#login {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 200px;
  
  input {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 20px;
    width: 200px;
  }

  button {
    margin-top: 20px;
    margin-right: 50px;
    margin-left:50px;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    color:#f1f0f5;
    background-color: red;
    font-weight: bold;

      &:hover {
        color: #1fb931;
      }
  }
}

</style>
