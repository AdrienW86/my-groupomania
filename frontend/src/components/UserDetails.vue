<template>
    <main>
        <div id="table_users">
            <h2> Nos membres </h2>
                <table> 
                     <tr>
    
    <td>Pseudo</td>
    <td>Biographie</td>
    <td>Photos</td>
    <td>Post</td>
  </tr>
  <tr>
    
    <td> {{}}</td>
    <td> {{}}</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    
    <td>User1</td>
    <td>Je me présente, Jean-jacques...</td>
    <td>Je suis trop moche</td>
    <td> et trop con</td>
  </tr>
  <tr>
    
    <td>Belle-mère</td>
    <td>Moi</td>
    <td>Moi</td>
    <td>Belle-soeur</td>
  </tr>
  
                    
                    
                </table>
        </div> 
    </main>
</template>

<script>
const axios = require('axios');

export default {

name: "UserDetails",
components: {
    
},
data() {
    return {
        user: [],
        userContent: [],
        comments: "",
        posts: ""
    };
},   
methods: {
    getAllUsers() {
        const options = {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + sessionStorage.getItem("key")
            }
        };
axios
    .get("http://localhost:8080/api/auth/all", options)
    .then(response => {
        this.userList = response.data;
        console.log(response.data)
    })
    .catch(err => console.log(err));
},


}
}


</script>

<style lang="scss">

table {
    border: 2px solid black;

    tr {
        border: 2px solid black;
    }

    td {
        border: 2px solid black;
    }
}
    

</style>