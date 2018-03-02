<template>
  <div class="main">
      <div class="sidebar"></div>
      <div class="content">
        <editor v-model="content"></editor>
        <renderer :markdown="content"></renderer>
      </div>
  </div>
</template>

<script>
import Editor from './components/Editor'
import Renderer from './components/Renderer'

export default {
  data () {
    return {
      content: ''
    }
  },
  components: {
    Editor,
    Renderer
  }
}
</script>

<style>
.main {
  height: 100vh;
  display: flex;
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.sidebar {
  flex-basis: 20%;
  background-color: #eee;
}

.content {
  flex-basis: 80%;
  display: flex;
}

.editor,
.renderer {
  flex-basis: 50%;
}

.editor{
    border-right: 2px solid #ddd;
}

</style>
