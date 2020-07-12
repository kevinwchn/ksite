<template>
  <div class="home">
    <p class="title">Ksite</p>
    <router-link to="/psy">Psyduck</router-link>
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
}

.title {
  font-size: 30px;
  font-weight: 400;
}
</style>

<script>
export default {
  name: 'Home'
}
</script>