<template>
    <footer> 
        <section class="logo"> 
            <a href="#">Groupomania </a> 
        </section>
        <section class="infos">
            <h4> Nos partenaires: </h4>
                <ul> 
                    <li> <a href="https://openclassrooms.com/fr"> OpenClassrooms </a> </li>
                    <li> <a href="https://developer.mozilla.org/fr/"> Developer Mozilla </a> </li>
                    <li> <a href="https://vuejs.org/"> Vue.Js </a> </li>
                </ul>
        </section>
        <section class="infos"> 
            <h4> Contacts </h4>
                <ul> 
                    <li> <a href="mailto: adrien_Weiss@outlook.fr"> Notre messagerie</a></li>
                    <li> +33 1 80 88 80 30 </li>
                    <li> <a href="https://openclassrooms.com/forum/"> FAQ </a> </li>
                </ul>
        </section>
        
    </footer>


</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>

footer {
    display: flex;
    height: 160px;
    background-color: #30289e;
    color: white;
    font-size: 0.5em;
    width: 100%;
    margin: auto;

    .logo {     
        margin: auto;  
    }

    .infos {
        display:flex;
        flex-direction: column;     
        margin: auto;
    }

    h4 {   
        text-align:center;
        color: white;
    }

      li {  
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: white
    }
}

</style>