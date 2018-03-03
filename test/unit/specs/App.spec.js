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

  test('it\'s sidebar should have a file-form', () => {
    expect(wrapper.contains('.sidebar .file-form')).toBe(true)
  })

  test('it\'s sidebar should have a file-list', () => {
    expect(wrapper.contains('.sidebar .files-list')).toBe(true)
  })

  test('it should have an empty files array data property', () => {
    expect(wrapper.vm.files).toBeDefined()
    expect(wrapper.vm.files.length).toBe(0)
  })

  test('it should have a createFile function which is called when FileForm is submitted', () => {
    expect(typeof wrapper.vm.createFile).toBe('function')
  })

  test('it should have a selectedFile property initially set as null', () => {
    expect(wrapper.vm.selectedFile).toBeDefined()
    expect(wrapper.vm.selectedFile).toBeNull()
  })

  test('it should hide the editor and renderer initially but show the blank window of class .no-file-selected', () => {
    expect(wrapper.contains('.editor')).not.toBe(true)
    expect(wrapper.contains('.renderer')).not.toBe(true)
    expect(wrapper.contains('.no-file-selected')).toBe(true)
  })

  test('it should show the editor and renderer and hide .no-file-selected when selectedFile is set', () => {
    wrapper.setData({
      selectedFile: { name: 'Hello', content: 'Hi' }
    })
    expect(wrapper.contains('.editor')).toBe(true)
    expect(wrapper.contains('.renderer')).toBe(true)
    expect(wrapper.contains('.no-file-selected')).toBe(false)
  })
})
