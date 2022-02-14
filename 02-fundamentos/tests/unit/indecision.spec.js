import { shallowMount, mount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'
//import Indecision from '../../src/components/Indecision'

let wrapper

beforeEach(() => {
    wrapper = shallowMount(Indecision)
})


describe('debe hacer match con snapshot', () => {
    exect(wrapper.html()).toMatchSnapshot()
})