import { mount } from '@vue/test-utils'
import App from '@/App'

describe('App.vue', () => {
  test('on successfull submit of the FileForm.vue createFile method of App.vue should be called', () => {
    let appWrapper = mount(App)
    appWrapper.setMethods({
      createFile: jest.fn()
    })
    let fileFormComponent = appWrapper.vm.$children.find(c => c.$options.name === 'FileForm')
    fileFormComponent.name = 'New File'
    appWrapper.find('form').trigger('submit')
    expect(appWrapper.vm.createFile).toHaveBeenCalled()
  })

  test('on successfull submit of the FileForm.vue files data property should be incremented by one', () => {
    let appWrapper = mount(App)
    let fileFormComponent = appWrapper.vm.$children.find(c => c.$options.name === 'FileForm')
    fileFormComponent.name = 'New File'
    appWrapper.find('form').trigger('submit')
    expect(appWrapper.vm.files.length).toBe(1)
    expect(appWrapper.vm.files).toEqual([{ name: 'New File' }])
  })

  test('it should render list of FileView components wrt files data property', () => {
    let appWrapper = mount(App)
    let fileFormComponent = appWrapper.vm.$children.find(c => c.$options.name === 'FileForm')
    let form = appWrapper.find('form')
    fileFormComponent.name = 'New File'
    form.trigger('submit')
    fileFormComponent.name = 'New File 2'
    form.trigger('submit')
    let fileViews = appWrapper.findAll('.file-view')
    expect(fileViews.length).toBe(2)
  })
})
