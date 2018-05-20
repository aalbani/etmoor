<template>
<!-- boxes that display a ppic (if fb has 0 will give pic of unav)
under the box will have add to cart + count -->
<v-container grid-list-lg id="container">

  <v-layout row wrap>
    <v-flex xs12 sm6 v-for="product in products" :key="product.id" >
      <v-card>
        <v-card-media
        height="200px"
        width="200px"
        >
        <img :src="product.datImage">
        </v-card-media>
        <v-card-title primary-title class="justify-center">
        <div>
         <h3> {{product.arabicTitle}} </h3>
         <h3> {{product.arabicTitle}} </h3>
        </div>
        </v-card-title>
        <v-card-actions class="justify-center">
              <v-dialog  v-show="true" persistent max-width="290">
                <v-btn slot="activator" color="primary" large outline dark>اضافة الى السلة</v-btn>
                <v-card >
                  <v-card-title class="headline">{{product.dateType}}</v-card-title>
                  <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" flat @click.native="dialog = false">Disagree</v-btn>
                    <v-btn color="green darken-1" flat @click.native="dialog = false">Agree</v-btn>
              </v-card-actions>
                </v-card>
              </v-dialog>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
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
      addDate(dateType) {
        this.dateType +1
      },
      subDate(dateType) {
        this.dateType -1
      },
      counter(dateType) {
        return this.dateType
      }
    }
  }
</script>

<style scoped>
h3 {
  font-family: 'Tajawal', sans-serif;
  font-weight: bold ;
  font-size: large
}

</style>