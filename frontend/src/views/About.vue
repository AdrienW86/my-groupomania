<template>
 <Sign/>
</template>

<script>
import Sign from '@/components/Sign.vue';
export default {
  name: 'Sign',
  components: {
    Sign,
  }
  
}
</script>
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