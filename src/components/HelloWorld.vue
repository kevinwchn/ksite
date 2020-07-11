<template>
  <div>
    <h1>KSite</h1>
    <p>Response from api</p>
    <p>{{ response }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  async created () {
    console.log(process.env.VUE_APP_API_ENDPOINT)

    const response = await fetch(`${process.env.VUE_APP_API_ENDPOINT}/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })

    this.response = (await response.json()).res
  },
  data () {
    return {
      response: ''
    }
  }
}
</script>

<style scoped>

</style>
