<script>
import ModalBase from './ModalBase.vue'
  export default {
    components: {
      ModalBase
    },
    methods: {
      modalToggle() {
        this.$store.commit('modalToggle')
        console.log(this.$store.state.showModal)
      }
    },  
  }
</script>
<template>
    <div class="flex justify-start sm:mx-20 sm:mt-5 sm:flex-row flex-col overflow-hidden z-0">
        <button class=" bg-primaryBlue text-white rounded-md py-2 px-4  sm:mt-0 mt-3 sm:mx-0 mx-3" @click="modalToggle()">Заказать в Москву</button>
        <button class=" bg-primaryGreen  text-white rounded-md sm:ml-5 py-2 px-4 sm:mt-0 mt-3 sm:mx-0 mx-3" @click="modalToggle()">Заказать в Санкт-Петербург</button>
    </div>
</template>