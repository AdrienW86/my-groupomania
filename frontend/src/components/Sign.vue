<template>
  <div class="hello">

   

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
