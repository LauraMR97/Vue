import { shallowMount, mount } from '@vue/test-utils'
import PokemonOptions from "@/components/PokemonOptions";

let wrapper

describe('PokemonOptions component', () => {


    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions)
    })

    test('debe hacer match con snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()

    })


    test('debe establecer el valor por defecto', () => {

        const pokemons = wrapper.props('pokemons');

        expect(Number(pokemons)).toBe(1)
    })


    test('debe montar la propiedad pokemons', () => {

        const pokemons = [{ id: 1, name: 'bulbasur' }, { id: 2, name: 'ivisur' }, { id: 3, name: 'venasaur' }, { id: 4, name: 'squirtle' }]


        const wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons
            }
        })

        const val = wrapper.findAll('li')

        expect(val[0].text()).toBe('bulbasur')
        expect(val[1].text()).toBe('ivisur')
        expect(val[2].text()).toBe('venasaur')
        expect(val[3].text()).toBe('squirtle')
    })



    test('me devuelve el numero de pokemons correcto', () => {

        const pokemons = [{ id: 1, name: 'bulbasur' }, { id: 2, name: 'ivisur' }, { id: 3, name: 'venasaur' }, { id: 4, name: 'squirtle' }]


        const wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons
            }
        })

        const val = wrapper.findAll('li')

        expect(val.length).toBe(4)

    })

})