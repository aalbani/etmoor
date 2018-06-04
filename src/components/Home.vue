<template>
<!--     coursel clickable to shop item
    buttn links to shop -->
    <v-layout fill-height>
    
              
          <!-- loading? -->
    <v-flex xs12 v-if="loading" class="text-xs-center justify-center mt-5">
    <v-progress-circular :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
    </v-flex>

          <!-- not loading -->
          
      <v-flex xs12 v-if="!loading">
        <v-carousel style="cursor: pointer;" hide-controls>
          <v-carousel-item v-for="product in products" :key="product.id">
          <img class="img" :src="product.datImage">
          </v-carousel-item>
      </v-carousel>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
computed : {
  loading() {
    return this.$store.getters['products/getLoading']
  },
  products() {
    return this.$store.getters['products/getProducts']
  }
},
methods : {
  buttClick () {
    this.$router.push('/Shop')
  }
},
created () {
  this.$store.dispatch('products/initProducts')  
}

}
</script>

<style scoped>
.img {
height: 100%;
width: 100%;
margin: 0;
}
</style>
