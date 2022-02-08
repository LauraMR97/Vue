<template>
<div>
  <h2> {{ customTitle }} </h2>

  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>


    <div>
        <!--Podemos poner v-on:click o @click-->
        <button @click="increase">+1</button>
        <button v-on:click="decrease">-1</button>
    </div>
</div>

</template>

<script>

export default {
props: {
    title: String,
    start: {
        type: Number,
        //required: true
        default: 100,
        validator(value){
            return value > 100
        }
    }
},
data() {
    return{
        counter : this.start
    }
},
methods: {
getSquareValue(){
    console.log('getSquareValue');
    return this.counter * this.counter;
},
increase(){
    this.counter= this.counter + 1 ;
},
decrease(){
    this.counter--;
}
},
computed: {
    squareCounter(){
    console.log('squareCounter');
    return this.counter * this.counter;
    },
    customTitle(){
        return this.title || 'Counter'; // 'Counter'
    }
}
}
</script>

<style>
button{
    background-color: #64bb87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover{
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}
</style>