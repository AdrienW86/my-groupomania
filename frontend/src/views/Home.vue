<template>


  <div class="home">
    
    <Login/>
    <Users />
    <CreatePost/>
    

   
  </div> 
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue';
import Users from '@/components/Users.vue';

import CreatePost from '@/components/CreatePost.vue';

export default {
  name: 'Home',
  components: {
    Login,
    Users,
    CreatePost
  }
}
</script>
