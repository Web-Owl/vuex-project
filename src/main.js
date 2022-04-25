import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './index.css'

const store = createStore({
  state () {
    return {
      count: 0,
      showModal: false
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    modalToggle (state) {
        state.showModal = !state.showModal
    }
  }
})

createApp(App).use(store).mount('#app')