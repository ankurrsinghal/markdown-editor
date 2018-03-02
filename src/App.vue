<template>
  <div class="main">
      <div class="sidebar"></div>
      <div class="content">
        <editor v-model="content"></editor>
        <div class="renderer"></div>
      </div>
  </div>
</template>

<script>
import Editor from './components/Editor'

export default {
  data () {
    return {
      content: ''
    }
  },
  components: {
    Editor
  }
}
</script>

<style>
.main {
  height: 100vh;
  display: flex;
  overflow: hidden;
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
