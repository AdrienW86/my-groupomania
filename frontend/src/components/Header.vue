<template>
    <header>
         <img alt="Vue logo" src="../assets/Groupomania_logo_white.png">
            <nav class="navbar">
                
                    <div class="connexion"> <router-link to="/">Connexion</router-link> </div>
                    <div class="inscription"> <router-link to="/sign">Inscription</router-link> </div>
            </nav>      
    </header>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style scoped lang="scss">

header { 
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 280px;

    img {      
        margin: auto;
    }

    nav {
    display: flex;
    width: 280px;
    text-align: center;
    margin-top: 20px;
    margin-left: 20%;
    }
    
    .connexion {
        margin-right: 10px;
    }    
}
</style>