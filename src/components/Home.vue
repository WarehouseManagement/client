<template>
  <div class="cover">
    <Navbar></Navbar>
    <div class="content row">
      <Sidebar></Sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from './Reusable/Sidebar'
import Navbar from './Reusable/Navbar'
export default {
  components: {
    Navbar, Sidebar
  }
}
</script>
<style scoped>
.row {
  margin: 0
}
.content {
  min-height: 720px;
}
</style>
