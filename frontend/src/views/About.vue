<template>
  <div class="about">
    <h1> Créer un compte </h1>

      <form id="login">
        <label for="email"> Entrer votre adresse mail </label>
          <input type="email" name="email"  class="email" required>

        <label for="password"> Entrer votre mot de passe </label>
           <input type="password" name="password"  class="password" required>

            <button id='login_btn' type="submit" @click="login()"> Valider </button>
      </form>

  </div>
</template>


<style scoped lang="scss">

h1 {
  color:#30289e;
}

#login {
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
    
    width: 50px;
    height: 30px;
    border-radius: 10px;
    color:#30289e;
    font-weight: bold;
  }
}

</style>