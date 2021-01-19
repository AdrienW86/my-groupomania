<template>
    <section class="connexion">
        
        <h1> Bienvenue {{ userInfos.username}} </h1>
            
            <form id="login">

              <h1> Connectez-vous </h1>

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
        isAdmin: "",
        bio: "",
      },
    err: "",
    }
  },

  methods: {

  

    

    login:  function () {
      const userData = {
        email : this.userInfos.email,
        username: this.userInfos.username,
        password : this.userInfos.password,
        isAdmin: this.userInfos.isAdmin,
        bio: this.userInfos.bio
      };

    if( userData.email == true || userData.username == true || userData.password == true) {
        alert('Saisies invalides')
    
    }else{
      axios
        .post("http://localhost:8080/api/auth/login", userData)
        .then(response => {
          if (response.status === 200) {
            return response;
          }else{
            throw(response.status);
          }
        }).then(response => {

          sessionStorage.setItem("key", response.data.token);
          sessionStorage.setItem("user", response.data.userId);
          sessionStorage.setItem("username", response.data.username);
          localStorage.setItem("privileges", response.data.isAdmin);
          window.location.href = "#/about"
           

        }).catch(err =>{
          console.log(err)

        });
            
              
           

    }   
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
    color:black;
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
