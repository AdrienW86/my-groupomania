<template>


  <div class="home">
    
    <Sign /> 
    <Users />
    <CreatePost/>

   
  </div> 
</template>

<script>
// @ is an alias to /src
import Sign from '@/components/Sign.vue';
import Users from '@/components/Users.vue';
import CreatePost from '@/components/CreatePost.vue';

export default {
  name: 'Home',
  components: {
    Sign,
    Users,
    CreatePost
  }
}
</script>
