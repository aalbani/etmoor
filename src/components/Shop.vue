<template>
<!-- boxes that display a ppic (if fb has 0 will give pic of unav)
under the box will have add to cart + count -->
<v-container grid-list-lg >


   <v-dialog v-model="dialog" persistent max-width="290">
    <v-card>
        <v-card-title class="headline justify-center">{{addProduct.arabicTitle}}</v-card-title>
        <v-layout row wrap class="justify-center">
        <v-btn icon color="error" @click="removeQuantity"><v-icon dark>remove</v-icon></v-btn>
        <v-subheader style="font-size: 35px" v-model="quantity">{{quantity}}</v-subheader>
        <v-btn icon color="success" @click="addQuantity"><v-icon dark>add</v-icon></v-btn>
        </v-layout>
        <v-card-actions class="justify-start mt-3">
          <v-btn flat @click.native="cancel">إلغاء</v-btn>
          <v-btn :disabled="quantity < 1" flat  @click.native="addToBasket(addProduct, quantity)">اضف الى السلة</v-btn>
    </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      id="snackbar"
      :timeout="timeout"
      bottom
      vertical
      v-model="snackbar"
      color="success"
    >
       تم اضافة طلبكم بنجاح
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>

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
          <v-btn @click="basketModal(product)" color="primary" large outline dark>اضافة الى السلة</v-btn>
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
        quantity: 0,
        addProduct: {
          dateType : '',
          arabicTitle : '',
          datImage: '',
          price: 0,
        },
        snackbar : false,
        timeout : 3000
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
      },
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
      basketModal(product) {
        this.addIndex = this.products.indexOf(product)
        this.addProduct = Object.assign({}, product)
        this.dialog = true
      },
      addQuantity() {
        this.quantity += 1
      },
      removeQuantity() {
        if (this.quantity > 0)
        this.quantity -=1
      },
      cancel() {
        this.quantity = 0,
        this.close()
      },
      addToBasket(product, quantity) {
        const order = {
          dateType : product.dateType,
          arabicTitle : product.arabicTitle,
          datImage : product.datImage,
          price : product.price,
          quantity : quantity
        }
        console.log(order)
        this.$store.dispatch('customer/newOrder', order)
        this.snackbar = true
        this.cancel()
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