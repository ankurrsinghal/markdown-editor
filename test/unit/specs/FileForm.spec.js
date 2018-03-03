import { mount } from '@vue/test-utils'
import FileForm from '@/components/FileForm'

describe('FileForm.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(FileForm)
  })

  test('it should have a class file-form', () => {
    expect(wrapper.classes()).toContain('file-form')
  })

  test('it should have a form, input and button', () => {
    expect(wrapper.contains('form')).toBe(true)
    expect(wrapper.contains('input[type="text"]')).toBe(true)
    expect(wrapper.contains('button[type="submit"]')).toBe(true)
  })

  test('it should emit an event submit with value of the input', () => {
    wrapper.setData({ name: 'hello' })
    wrapper.find('form').trigger('submit')
    expect(wrapper.emitted().submit).toBeTruthy()
    expect(wrapper.emitted().submit[0]).toEqual(['hello'])
  })

  test('it should not emit the event for empty value', () => {
    wrapper.setData({ name: '' })
    wrapper.find('form').trigger('submit')
    expect(wrapper.emitted().submit).not.toBeTruthy()
  })

  test('it should not emit the event for spaces', () => {
    wrapper.setData({ name: '   ' })
    wrapper.find('form').trigger('submit')
    expect(wrapper.emitted().submit).not.toBeTruthy()
  })

  test('it should clear the input field on form submission', () => {
    wrapper.setData({ name: 'New File' })
    wrapper.find('form').trigger('submit')
    let input = wrapper.find('input[type="text"]')
    expect(input.element.value).toBe('')
  })
})
