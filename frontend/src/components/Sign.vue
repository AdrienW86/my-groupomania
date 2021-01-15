<template>
  <div class="hello">

    <h1> Bienvenue My Groupomania </h1>

      <div class="mur_messages">

      <form id="signup">
        <label for="email"> Entrer votre adresse mail </label>
          <input type="email" name="email"  class="email" required>

        <label for="password"> Entrer votre mot de passe </label>
           <input type="password" name="password"  class="password" required>

            <button id='sign_btn' type="submit" @click="sign()"> Valider </button>
      </form>

    </div> 
    
  </div>
    
</template>

<script>
export default {
  name: 'Sign',
 
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
  width: 70%;
  
  input {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 20px;
  }

  button {
    margin-top: 20px;
    margin-left: 30%;
    margin-right: 30%;
    width: 40%;
    height: 30px;
    border-radius: 10px;
    color:#30289e;
    font-weight: bold;
  }
}

</style>
