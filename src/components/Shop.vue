<template>
<!-- boxes that display a ppic (if fb has 0 will give pic of unav)
under the box will have add to cart + count -->
  
  <v-layout row wrap>
    <v-spacer></v-spacer>
    
    
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-for="product in products" :key="product.id">
              <v-card>
                <v-card-media
                  :src="product.datImage"
                  height="250px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12  align-end flexbox>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <v-btn block color="secondary" dark>اضف الى السلة</v-btn>
                  <v-btn flat icon color="secondary" @click="addDate(product.Type)">
                    <v-icon>keyboard_arrow_up</v-icon>
                  </v-btn>
                  <span class="headline black--text" v-text="dateCount(product.Type)"></span>
                  <v-btn flat icon color="secondary" @click="subDate(product.Type)">
                    <v-icon>keyboard_arrow_down</v-icon>
                  </v-btn>
                  <span class="headline black--text" v-text="product.arabicTitle"></span>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

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
      },
      dateCount() {
        
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