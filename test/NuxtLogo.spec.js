import { mount } from '@vue/test-utils'
import NavigationBar from '@/components/NavigationBar.vue'

describe('NavigationBar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NavigationBar)
    expect(wrapper.vm).toBeTruthy()
  })
})
