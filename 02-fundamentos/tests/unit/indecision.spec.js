import { shallowMount, mount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'
//import Indecision from '../../src/components/Indecision'

let wrapper
let clgSpy


global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({
            "answer": "yes",
            "forced": false,
            "image": "https://yesno.wtf/assets/yes/2.gif"

        })
    })
)

beforeEach(() => {
    wrapper = shallowMount(Indecision)
    clgSpy = jest.spyOn(console, 'log')
    jest.clearAllMocks()
})


describe('Indecision component', () => {

    test('debe hacer match con snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('escribir en el input no dispara nada', async() => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')

        await input.setValue('Hola mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(0)
    })

    test('escribir "?" debe disparar un fetch', async() => {

        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')

        await input.setValue('Hola mundo?')

        expect(getAnswerSpy).toHaveBeenCalled()
    })

    test('pruebas en getAnswer', async() => {

        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Si!')
    })

    test('pruebas en getAnswer - Fallo del API', async() => {

        fetch.mockImplementationOnce(() => Promise.reject('Api is down'))

        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')
        expect(img.exists()).toBeFalsy()

        expect(wrapper.vm.answer).toBe('API error: No carga informacion')
        expect(clgSpy).toHaveBeenCalledTimes(1)
    })

})