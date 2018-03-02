import Vue from 'vue'
import Renderer from '@/components/Renderer'

describe('Renderer.vue', () => {
  let vm
  let Constructor
  beforeAll(() => {
    Constructor = Vue.extend(Renderer)
    vm = new Constructor({ propsData: { 'markdown': '**hi**' } }).$mount()
  })

  test('it should have a class renderer', () => {
    expect(vm.$el.className).toBe('renderer')
  })

  test('it should receive a prop markdown', () => {
    let vm = new Constructor({ propsData: { 'markdown': '**hi**' } }).$mount()
    expect(vm.markdown).toBe('**hi**')
  })

  test('it should hava a computed prop to convert markedown to valid html', () => {
    expect(vm.$options.computed.htmlFromMarkdown).toBeDefined()
    let html = vm.htmlFromMarkdown
    expect(html.trim()).toBe('<p><strong>hi</strong></p>')
  })
})
