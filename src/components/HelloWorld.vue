<template>
  <div>
    Hi
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

    console.log(await response.json())
  }
}
</script>

<style scoped>

</style>
