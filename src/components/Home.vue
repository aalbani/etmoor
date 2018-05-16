<template>
<!--     coursel clickable to shop item
    buttn links to shop -->
  <v-app>
  <v-container fluid>
    <v-layout row wrap>
    
              
          <!-- loading? -->
    <v-flex xs12 v-if="loading" class="text-md-center">
    <v-progress-circular :size="70" :width="7" indeterminate color="green"></v-progress-circular>
    </v-flex>

          <!-- not loading -->
      <v-flex sm6 xs12 offset-sm3 v-if="!loading">
        <v-carousel style="cursor: pointer;">
          <v-carousel-item v-for="product, index in products" :key="product.id">
          <img class="img" :src="products[index].datImage">
          </v-carousel-item>
      </v-carousel>
      <v-flex class="text-md-center">
      <v-btn round  large  color="primary" class="mt-3" dark @click="buttClick">تسوق الآن</v-btn>
      </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
  </v-app>
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
