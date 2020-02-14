import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import HelloWorld from '@/components/HelloWorld.vue'

const localVue = createLocalVue()

describe('HelloWorld.vue', () => {
  let vuetify: any

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = mount(HelloWorld, {
      localVue,
      vuetify,
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
