<script setup>
import { def } from '@vue/shared';
import Buttons from './components/Buttons.vue'
import ModalBase from './components/ModalBase.vue'
</script>
<script>
  export default {
    computed: {
      showModal() {
        return this.$store.state.showModal
      }
    },
  }
</script>

<template>
  <ModalBase :showModal="showModal"/>
  <Buttons />
</template>

<style>
@import './assets/base.css';

</style>
