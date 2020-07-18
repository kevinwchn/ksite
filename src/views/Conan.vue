<template>
  <div class="conan-div">
    <input
      v-model="episodeId"
      placeholder="输入集数"
      class="episode-input"
    >
    <button
      type="button"
      @click="submit"
      class="submit-btn"
    >Click Me!</button>
  </div>
</template>

<style scoped>
.episode-input {
  font-size: 80px;
  width: 100%;
}

.submit-btn {
  width: 100%;
  height: 80px;
}
</style>

<script>
const axios = require('axios')

export default {
  name: 'Conan',
  data () {
    return {
      episodeId: '',
      classicBrowser: true
    }
  },
  created () {
    const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
    const isFirefox = typeof InstallTrigger !== 'undefined'
    this.classicBrowser = !isChrome && !isFirefox
  },
  methods: {
    async submit () {
      const response = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}/episodes/conan/${this.episodeId}`)
      window.location.href = this.classicBrowser ? response.data.classicUrl : response.data.newUrl;
    }
  }
}
</script>