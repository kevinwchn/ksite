<template>
  <div class="home">
    <p class="title">Ksite</p>
    Hello! This is Kevin Wang's play ground.<br />
    <Visitor />
    <br />
    Watch the <router-link to="/psy">Psyduck</router-link> swimming.
    <div style="height: 10vh;"></div>
    <SkatingCat />
  </div>
</template>

<style scoped>
.home {
  padding: 20px;
  background-color: #D7EDEE;
  height: 100vh;
}

.title {
  font-size: 30px;
  font-weight: 400;
}
</style>

<script>
import SkatingCat from '@/components/SkatingCat.vue'
import Visitor from '@/components/Visitor.vue'

export default {
  name: 'Home',
  components: {
    SkatingCat,
    Visitor
  }
}
</script>