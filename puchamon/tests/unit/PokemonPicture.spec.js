import { shallowMount } from '@vue/test-utils'
import PokemonPicture from "@/components/PokemonPicture";



describe('PokemonPicture component', () => {
    let wrapper
    let clgSpy

    beforeEach(() => {
        wrapper = shallowMount(PokemonPicture)

        clgSpy = jest.spyOn(console, 'log')
        jest.clearAllMocks()
    })

    test('debe hacer match con snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()

    })


    test('debe establecer el valor por defecto', () => {

        const showPokemon = wrapper.props('showPokemon');
        const pokemonId = wrapper.props('pokemonId');

        expect(Number(pokemonId)).toBe(1)
        expect(Number(showPokemon)).toBe(0)
    })



    test('debe montar la propiedad pokemonId y showPokemon', () => {

        //COMO HE PUESTO showPokemon a true, me va a permitir hacer la peticion
        const pokemonId = 3
        const showPokemon = true

        const wrapper = shallowMount(PokemonPicture, {
            props: {
                showPokemon,
                pokemonId
            }
        })

        const url = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + pokemonId + '.svg" alt="pokemon" class="fade-in">';
        const imagen = wrapper.find('img')

        //Aqui compruebo que efectivamente se esta usando el pokemon con la id 3
        const imageAux = imagen.html()
        console.log(imageAux);

        expect(imagen.html()).toBe(url)
    })

    test('me devuelve el numero de imagenes correcto', () => {

        const pokemonId = 5
        const showPokemon = true

        const wrapper = shallowMount(PokemonPicture, {
            props: {
                showPokemon,
                pokemonId
            }
        })

        const imagen = wrapper.findAll('img')

        expect(imagen.length).toBe(1)

    })


})