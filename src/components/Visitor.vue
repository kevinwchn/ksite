<template>
  <div v-if="!hasError">
    <p>
      You have visited KSite {{ visitCount }} times. Your current IP is {{ ip }}.
    </p>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Visitor',
  data () {
    return {
      visitCount: 0,
      ip: '',
      hasError: false
    }
  },
  async created () {
    try {
      const response = await axios.post(`${process.env.VUE_APP_API_ENDPOINT}/visitors`)
      console.log(response)
      this.ip = response.data.visitor.ip
      this.visitCount = response.data.visitor.visit
    } catch (err) {
      console.log(err)
      this.hasError = true
    }

  }
}
</script>