//Esto es mi primer componente, lo estoy montando en el div #myApp
//*************************************Ejemplo 1*********************************** */

/*const app = Vue.createApp({
    template: `
    <h1>Hola mundo</h1>
    <p>Desde app js</p>
    `
})
app.mount('#myApp');*/

//*************************************Ejemplo 2*********************************** */

//Ejemplo 2 // uso de {{}}  con un if else 
/*const app = Vue.createApp({
    template: `
    <h1>Hola mundo</h1>
    <p>{{true ? 'Activo' : 'Inactivo'}}</p>
    `
})
app.mount('#myApp');*/

//*************************************Ejemplo 3*********************************** */
//suma desde html con llaves
/*const app = Vue.createApp({

})
app.mount('#myApp');*/


//*************************************Ejemplo 4*********************************** */
//variables para enviar al div #myApp  al html con llaves: {{ message }}
/*const app = Vue.createApp({

    data() {
        return {
            message: 'Hola mundo!!!'
        }
    }
})
app.mount('#myApp');*/

//*************************************Ejemplo 5*********************************** */

//Mas variables y un metodo para gestionar un evento, mostrar Hola Mundo al pulsar un boton
/*const app = Vue.createApp({

    data() {
        return {
            quote: "I'm Batman",
            author: "Bruze Whayne"
        }
    },
    methods: {
        changeQuote(event) {
            console.log('Hola Mundo', event);
        }
    }
})
app.mount('#myApp');*/

//*************************************Ejemplo 6*********************************** */

//Mas variables y un metodo para gestionar un evento, cambiar variables con un envento,
//en este caso, el autor
/*const app = Vue.createApp({

    data() {
        return {
            quote: "I'm Batman",
            author: "Bruze Whayne"
        }
    },
    methods: {
        changeQuote(event) {
            this.author = 'Laura Moreno'
        }
    }
})
app.mount('#myApp');*/

//*************************************Ejemplo 7*********************************** */

//Mas variables y un metodo para gestionar un evento, cambiar variables con un envento,
//en este caso, el autor y llamar a otra funcion llamada capitalize en el metodo que 
//pone la variable quote en mayuscula
const app = Vue.createApp({

    data() {
        return {
            quote: "I'm Batman",
            author: "Bruze Whayne"
        }
    },
    methods: {
        changeQuote(event) {
            this.author = 'Laura Moreno'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }

    }
})
app.mount('#myApp');