<template>
  <nav id="sidebar" class="col-lg-2">
    <!-- Sidebar Links -->
    <ul class="list-unstyled components">
      <li class="list-main">
        <a href="#procurement" data-toggle="collapse" aria-expanded="false">Procurement</a>
        <ul class="collapse list-unstyled ul" id="procurement">
          <li>
            <a>Open PO</a>
          </li>
        </ul>
      </li>
      <li class="list-main">
        <a href="#factory" data-toggle="collapse" aria-expanded="false">Factory</a>
        <ul class="collapse list-unstyled ul" id="factory">
          <li>
            <router-link :to="{ name: 'RequestPO' }">Request PO</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
#sidebar {
  background-color: #f8f9fa;
  padding: 0;
  text-align: left;
  min-width: 250px;
}

ul{
  margin: 0
}

.list-main {
  padding: 0 15px;
}

a:hover {
  text-decoration: none;
}
</style>
