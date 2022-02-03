//*************************************Ejemplo 8 y V-FOR*********************************** */
// el contenido que he compiado en git, es un array, y lo estoy retornando al html para
//mostrarlo

/*const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

console.log(quotes);

const app = Vue.createApp({
    data() {
        return {
            quotes
        }
    }
})
app.mount('#myApp');*/

//*************************************V-MODEL*********************************** */
//Enlazar la variable newQuote con un input de texto y al presionar enter, que se añada a la lista
//FORMA 1 DE HACERLO
/*const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

console.log(quotes);

const app = Vue.createApp({
    data() {
        return {
            quotes,
            newQuote: 'Hola mundo'
        }
    },
    methods: {
        addQuote({ charCode }) {

            if (charCode == 13) {
                this.quotes.unshift({
                    quote: this.newQuote
                })
            }

        }
    }
})
app.mount('#myApp')*/

//FORMA 2 DE HACERLO
//Con este codigo también haremos el v-if y el v-show //se recomienda no usar v-for y v-if juntos
const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

console.log(quotes);

const app = Vue.createApp({
    data() {
        return {
            quotes,
            newQuote: 'Hola mundo'
        }
    },
    methods: {
        addQuote() {

            this.quotes.unshift({
                quote: this.newQuote
            })

        }
    }
})
app.mount('#myApp')