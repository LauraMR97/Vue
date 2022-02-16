import { shallowMount, mount } from '@vue/test-utils'
import Counter from '@/components/Counter'
//import Indecision from '../../src/components/Indecision'

let wrapper


describe('Counter component', () => {

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    test('debe hacer match con snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('h2 debe tener por defecto "counter"', () => {

        const h2Value = wrapper.find('h2').text();

        expect(h2Value).toBe('Counter')
    })



    test('el valor por defecto de p sea 100 por posiciones"', () => {

        const pTags = wrapper.findAll('p')

        expect(pTags[1].text()).toBe('100')
    })


    test('el valor por defecto de p sea 100 por id', () => {

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('100')
    })



    test('debe incrementar en 1 el valor de counter', async() => {

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await increaseBtn.trigger('click')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()
        expect(value).toBe('99')
    })


    //Nos permite acceder con wrapper a las propiedades
    test('debe establecer el valor por defecto', () => {

        const start = wrapper.props('start');
        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)
    })


    test('debe montar la propiedad title', () => {

        const title = 'Hola este es mi mundo'

        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        })

        expect(wrapper.find('h2').text()).toBe(title)
    })
})