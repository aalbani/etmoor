<template>
<main>
  <v-alert type="info" dismissible @input="onClose" :value="true">
    {{ text }}
  </v-alert>
</main>
</template>

<script>
  export default {
    props: ['text'],
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    }
  }
</script>
<style scoped>
main {
    direction: ltr
}
</style>
