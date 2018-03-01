<template>
  <div class="main">
      <div class="sidebar"></div>
      <div class="content">
        <div class="editor"></div>
        <div class="renderer"></div>
      </div>
  </div>
</template>

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

</style>
