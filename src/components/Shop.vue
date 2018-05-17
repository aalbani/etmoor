<template>
<!-- boxes that display a ppic (if fb has 0 will give pic of unav)
under the box will have add to cart + count -->
  <v-layout row>
    <v-flex xs4 v-for="product, index in products" :key="product.id">
      <v-card hover>
        <v-card-media :src="products[index].datImage" 
        height="300px">
        </v-card-media>
        <v-card-title primary-title class="justify-center">
        <h3 class="headline mb-2 mt-0" >kk</h3>
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn fab dark small color="success" @click="addItemCount">
          <v-icon dark>add</v-icon>
          </v-btn>
          <p id="quantityCounter">{{itemCount}}</p>
          <v-btn fab dark small color="error" @click="subItemCount">
          <v-icon dark>remove</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
       <v-spacer></v-spacer>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
      itemCount: 0
      }
    },
    computed: {
      products() {
        return this.$store.getters['products/getProducts']
      }
    },
    created () {
      if (!this.products){
      this.$store.dispatch('products/initProducts')  
      }
    },
    methods: {
      addItemCount() {
        this.itemCount +=1
      },
      subItemCount() {
        if(this.itemCount !== 0)
        this.itemCount -=1
      },
    }
  }
</script>

<style scoped>
h3 {
  font-family: 'Tajawal', sans-serif;
  font-weight: bold ;
  font-size: xx-large
}
#quantityCounter {
  font-family: 'Tajawal', sans-serif;
  font-weight: bold ;
  font-size: xx-large
}
</style>