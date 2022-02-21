<template>
<div>
  <img 
  src="imgSrc" 
  alt="pokemon" 
  class="hiden-pokemon">

    <img  v-if="showPokemon"
  src="" 
  alt="pokemon" 
  class="fade-in">
</div>
</template>

<script>
export default {
    props:{
       pokemonId:{
        type: Number,
        required: true
    },
    showPokemon:{
        type: Boolean,
        required:true,
        default:false
    }
    },
 computed:{
        imgSrc(){
            return`/${this.pokemonId}`
        }
    }
}

   
</script>

<style scoped>
.hidden-pokemon{
    filter: brightness(0);
}
</style>