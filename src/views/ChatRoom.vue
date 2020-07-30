<template>
  <div>
    <p class="title">KSite ChatRoom v1.0</p>
    <div v-if="nicknameSet">
      <p>Welcome {{nickname}}!</p>
      <input
        v-model="message"
        @keyup.enter="sendMessage"
      />
      <button @click="sendMessage">Send</button>
      <div>
        <p
          v-for="m in messageList"
          :key="m"
        >
          {{ m.sender }} : {{ m.text }}
        </p>
      </div>
      <button @click="leaveChatRoom">Leave the chat</button>
    </div>
    <div v-else>
      Enter your nickname:
      <input
        v-model="nickname"
        @keyup.enter="setNickname"
      />
      <button @click="setNickname">Go</button>
    </div>

  </div>
</template>

<style scoped>
.title {
  font-size: 28px;
  font-weight: normal;
}
</style>

<script>
const io = require('socket.io-client')

export default {
  name: 'ChatRoom',
  data () {
    return {
      message: '',
      socket: undefined,
      messageList: [],
      nickname: '',
      nicknameSet: false
    }
  },
  methods: {
    setupSocket () {
      this.socket = io(`${process.env.VUE_APP_API_ENDPOINT}`)

      this.socket.on('chat message', (message) => {
        this.messageList.push(message)
      })
    },
    sendMessage () {
      console.log(`Message sent: ${this.message}`)
      this.socket.emit('chat message', this.message)
      this.message = ''
    },
    setNickname () {
      this.nicknameSet = true
      this.setupSocket()
      this.socket.emit('join chat', this.nickname)
    },
    leaveChatRoom () {
      this.socket.close()
      this.socket = undefined
      this.messageList = []
      this.nicknameSet = false
      this.nickname = ''
    }
  }
}
</script>