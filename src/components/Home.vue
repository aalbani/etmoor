<template>
<!--     coursel clickable to shop item
    buttn links to shop -->
  <v-app>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex sm6 xs12 offset-sm3>
        <v-carousel style="cursor: pointer;">
          <v-carousel-item>
          <img class="img" src="https://img2.exportersindia.com/product_images/bc-full/dir_93/2786565/sayer-dates-946949.jpg">
          </v-carousel-item>
          <v-carousel-item>
          <img class="img" src="http://singaporeajwadates.com/wp-content/uploads/2017/11/Reshma-Dates-18.jpg">
          </v-carousel-item>
      </v-carousel>
      <v-flex  offset-sm5 offset-xs3>
      <v-btn round  large  color="primary" class="mt-3" dark @click="buttClick">تسوق الآن</v-btn>
      </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
  </v-app>
</template>

<script>
export default {
methods : {
  buttClick () {
    this.$router.push('/Shop')
  }
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
