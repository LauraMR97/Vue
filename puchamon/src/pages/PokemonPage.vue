<template>
  <h1>¿Quien es este Pokemon?</h1>
</template>

<PokemonPicture :pokemonId="17" :pokemonShow:"true"/>
<PokemonOptions/>


<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import getPokemonOptions from '../helpers/getPokemonOptions.vue'

export default {
components: {PokemonPicture,PokemonOptions}
}
</script>

<style>

</style>