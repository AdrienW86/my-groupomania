<template>
    <header>
         <img alt="Vue logo" src="../assets/Groupomania_logo_white.png">
            <nav class="navbar">
            

                 <div v-if="isLogged ==  0" class="connexion"> <router-link to="/login">Connexion</router-link> </div>
                   <div v-if="isLogged == 1" class="deconnexion"> <button @click="disconnect()"> Déconnexion </button></div>

                    <div else class="inscription"> <router-link to="/sign">Inscription</router-link> </div>
            </nav>  

                        <h2> {{ username }} </h2>
                    <div v-if="isAdmin == true">  <p> Status : Administrateur  </p></div>
                    <div  v-else-if="isAdmin == false">  <p> Status : Membre  </p></div>
    </header>
</template>

<script>
export default {
    name: "Header",


data() {
    return {
        isLogged: "",
        isAdmin: localStorage.getItem('admin'),
        username: sessionStorage.getItem('username'),
        userbio : sessionStorage.getItem('bio'),
        createdAt : localStorage.getItem('create'),
        userId : sessionStorage.getItem('user'),
    }
    
},

mounted() {

    if(localStorage.islog) {
        this.isLogged = 1
        
    }else{
        this.isLogged = 0      
    }
    if(localStorage.admin == true) {
        this.isAdmin = true
    }else{
        this.isAdmin = false
    }
    
},   
methods: {

    disconnect() {
        sessionStorage.clear()
        localStorage.clear()
        window.location.href = '/login'
    }
},

}
</script>

<style scoped lang="scss">

h2 {
    color: white;
}

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
    }

        a {
            font-weight: bold;
            color: #e2e8ee;
        }

        .router-link-exact-active {
            color: #fa0c0c;
        }

        .inscription {
            text-decoration: none;

            :hover {
                color: red;
            }
        }

        .connexion {
            margin-right: 10px;
            text-decoration: none;

            :hover {
                color: red;           
            }        
        }   
}
p {
    color: red;
    font-weight: bold;
    font-size: 1.2em;
} 

button {
    border-radius: 40px;
    font-weight: bold;
    color: blue;
    background: rgb(253, 251, 251);
    height: 40px;
        
        &:hover {
            transform: scale(1.1);
    }
}
   

</style>