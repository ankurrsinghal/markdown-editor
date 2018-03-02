import { mount } from '@vue/test-utils'
import App from '@/App'

describe('App.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(App)
  })

  test('it should have a sidebar', () => {
    expect(wrapper.contains('.sidebar')).toBe(true)
  })

  test('it should have a content panel', () => {
    expect(wrapper.contains('.content')).toBe(true)
  })

  test('it\'s content panel should have an editor', () => {
    expect(wrapper.contains('.content .editor')).toBe(true)
  })

  test('it\'s content panel should have an renderer', () => {
    expect(wrapper.contains('.content .renderer')).toBe(true)
  })

  test('it\'s sidebar should have a file-form', () => {
    expect(wrapper.contains('.sidebar .file-form')).toBe(true)
  })
})
