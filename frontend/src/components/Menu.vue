<template>
    <div>
        <section class="router">
            <div class="router_link"> 
                <router-link to="/messages"> 
                    <span> Messages 
                    </span> 
                </router-link> 
            </div>
            <div class="router_link"> 
                <router-link to="/users"> 
                    <span> Membres 
                    </span> 
                </router-link> 
            </div>
            <div class="router_link">
                <router-link to="/profil"> 
                    <span> Mon Profil 
                    </span> 
                </router-link> 
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "Menu.vue"
}
</script>

<style lang="scss" scoped>

.router {
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  margin-bottom: 50px;
  margin-top: 50px;

  .router_link {
    font-weight: bold;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 50%;
    height: 80px;
    width: 80px;
    box-shadow: 1px 5px 16px 10px rgba(187, 183, 183, 0.4);
   -moz-box-shadow: 1px 5px 16px 10px rgba(187, 183, 183, 0.4);
    -webkit-box-shadow: 1px 5px 16px 10px rgba(187, 183, 183, 0.4);
    background-image: radial-gradient(farthest-corner at 60px 60px,
      #f35 0%, rgb(202, 200, 228) 100%);;

    &:hover {
       transform: scale(1.1);
    }

    span {
      display: inline-block;
      vertical-align: center;
      position: relative;
      top: 30px;
      color:rgb(11, 11, 124);
    }    
  }
}

</style>