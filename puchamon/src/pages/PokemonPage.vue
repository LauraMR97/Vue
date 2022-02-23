<template>
<div>
<h1 v-if="!pokemon">Espere por favor...</h1>
<div v-else>
  <h1>Cual es este Pokemon?</h1>

<pokemon-picture :pokemonId="pokemon.id" :showPokemon="showPokemon"></pokemon-picture>
<PokemonOptions :pokemons="pokemonArr" @selectedPokemon="checkAnswer"/>

      <template v-if="showAnswer">
        <h2>Tienes {{puntos}} puntos</h2>
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="nuevoJuego">Nuevo Juego</button>
      </template>
</div>
</div>
</template>


<script>
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import getPokemonOptions from '../helpers/getPokemonOptions'

export default {
components: {PokemonPicture,PokemonOptions},
data(){
  return{
    pokemonArr: [],
    pokemon: null,
    showPokemon: false,
    showAnswer: false,
    message: '',
    puntos: 0
  }
},
methods: {
  async mixPokemonArray(){
    this.pokemonArr = await getPokemonOptions()
    const randInt = Math.floor(Math.random()*4)
    this.pokemon = this.pokemonArr[randInt]
  },
  checkAnswer(selectedPokemon){
    this.showPokemon=true;
    this.showAnswer=true;

    if(selectedPokemon=== this.pokemon.id){
      this.message = `Correcto, es ${this.pokemon.name}`
      this.puntos++;

      if(this.puntos==10){
        this.message = `Has ganado, Enhorabuena`
        this.puntos=0;
      }
    }else{
       this.message = `Oooooooopsssss, era ${this.pokemon.name}`
       this.puntos=0;
    }
  },
  nuevoJuego(){
  this. pokemonArr =[],
   this. pokemon =null,
   this. showPokemon= false,
   this. showAnswer= false,
  this.  message= '',
  this.mixPokemonArray()
  }
},
mounted(){
  this.mixPokemonArray()
}
}
</script>

<style>

</style>