<template>
  <div class="sign">

    
    <h1> Créer un compte </h1>

      <form id="signup">

        <label for="username"> Entrer votre pseudo </label>
          <input v-model="userInfos.username" name="username"  class="username" required>

        <label for="email"> Entrer votre adresse mail </label>
          <input v-model="userInfos.email" name="email"  class="email" required>

        <label for="password"> Entrer votre mot de passe </label>
           <input v-model="userInfos.password" name="password"  class="password" required>

            <button id='sign_btn' type="submit" @click="sign()"> Valider </button>
      </form>

    </div> 
    
  
    
</template>

<script>
import axios from 'axios';

export default {
  name: 'Sign',

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

    sign() {
      const userData = {
        email : this.userInfos.email,
        username: this.userInfos.username,
        password : this.userInfos.password,
        

      };
    if( userData.email == null || userData.username == null || userData.password == null) {
        alert('Saisies invalides')
    
    }else{
      axios
        .post("http://localhost:8080/api/auth/signup", userData)
        .then((response) => {
          if(response) {
            this.storeInfo(response.data.token, response.data.userId);
            
          }
        }).catch((err) => console.log(err));

      } 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1 {
  color:#30289e;
}

#signup {
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
    color:#30289e;
    font-weight: bold;

      &:hover {
        color: red;
      }
  }
}

</style>
