<template>
<!-- boxes that display a ppic (if fb has 0 will give pic of unav)
under the box will have add to cart + count -->
<v-container grid-list-lg >


   <v-dialog v-model="dialog" persistent max-width="290">
    <v-card>
        <v-card-title class="headline justify-center">{{addProduct.arabicTitle}}</v-card-title>
        <v-layout row wrap class="justify-center">
        <v-btn small icon color="error"><v-icon dark>remove</v-icon></v-btn>
        <h1>{{addProduct.quantity}}</h1>
        <v-btn small icon color="success"><v-icon dark>add</v-icon></v-btn>
      
        </v-layout>

        <v-card-actions class="justify-start">
          <v-btn color="green darken-1" flat small @click.native="dialog = false">إلغاء</v-btn>
          <v-btn color="green darken-1" flat small @click.native="dialog = false">اضف الى السلة</v-btn>
    </v-card-actions>
      </v-card>
    </v-dialog>


  <v-layout row wrap>
    <v-flex xs6 sm4 lg3 v-for="(product) in products" :key="product.id" >
      <v-card>
        <v-card-media
        height="200px"
        width="200px"
        >
        <img :src="product.datImage">
        </v-card-media>
        <v-card-title primary-title class="justify-center">
        <div class="headline">
         <h4> {{product.arabicTitle}} </h4>
         <h4> {{product.arabicTitle}} </h4>
        </div>
        </v-card-title>
        <v-card-actions class="justify-center">
          <v-btn @click="addToBasket(product)" color="primary" large outline dark>اضافة الى السلة</v-btn>
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
        addIndex: -1,
        addProduct: {
          dateType : '',
          arabicTitle : '',
          datImage: '',
          quantity: 1,
          price: 0,
        }
    }
    },
    watch: {
      dialog (val) {
        val || this.close()
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
      close() {
        this.dialog = false
      },
      addToBasket(product) {
        this.addIndex = this.products.indexOf(product)
        this.addProduct = Object.assign({}, product)
        this.dialog = true
      }
    }
  }
</script>

<style scoped>
.headline {
  font-family: 'Tajawal', sans-serif;
  font-weight: bold ;
  font-size: large
}

</style>