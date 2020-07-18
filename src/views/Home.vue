<template>
  <div class="home">
    <p class="title">Ksite</p>
    Hello! This is Kevin Wang's playground. I love building <a href="https://vuejs.org/">Vue.js</a> and <a href="https://nodejs.org/en/">Node.js</a> apps.<br />
    <Visitor />
    Watch <router-link to="/conan">柯南</router-link> on your TV. <br />
    Watch the <router-link to="/psy">Psyduck</router-link> swimming.
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