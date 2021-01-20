<template>
    <header>
         <img alt="Vue logo" src="../assets/Groupomania_logo_white.png">
            <nav class="navbar">
                
                    <div class="connexion"> <router-link to="/">Connexion</router-link> </div>

                  <!--  <div class="déconnexion"> <router-link to="/">Déconnexion</router-link> </div> !-->

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
    width: 100%;

    img { 
        padding-top: 20px; 
        padding-bottom: 40px;
        width: 200px;  
        margin: auto;
    }

    nav {
    display: flex;
    width: 90%;
    margin-left:5%;
    text-align: center;
    margin-top: 20px;
    justify-content: space-between;
    

        a {
        font-weight: bold;
        color: #e2e8ee;
        }

        .router-link-exact-active {
        color: #fa0c0c;
        }

        .connexion {
        margin-right: 10px;
       

        &:hover {
            color: red;
        }
        }
    }   
}   
   

</style>