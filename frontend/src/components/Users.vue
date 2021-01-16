<template>
    
    <div id="table_user"> 

        <h2> Liste des utilisateurs </h2>

            <button @click="getAllUsers()"> Voir les utilisateurs </button>

    <div class="liste_users">
        <UserDetails/>
         </div>
        
    </div>
</template>

<script>


import UserDetails from './UserDetails';
export default {
    name: "Users",

    components: {
        UserDetails
    }
    


}
</script>