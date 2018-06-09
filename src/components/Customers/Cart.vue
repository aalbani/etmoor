<template>
        
<v-container fluid grid-list-md>
    <v-layout v-for="order in orderList" :key="order.dateType" class="justify-center">
      <v-flex xs12 sm6 md4 lg3>
        <v-card color="primary">
            <v-card-media
              contain
              height="200px"
            >
              <img :src="order.datImage">
            </v-card-media>
            <v-card-actions>
              <v-layout row wrap class="justify-center text-xs-center">
                  <v-flex xs12 class="justify-center text-xs-center">
                <h2 class="headline">{{order.arabicTitle}}</h2>
                <h2 class="headline">السعر: {{order.price}} ر.س</h2>                    
                  </v-flex>
                
                
                <v-btn icon small color="success"
                :disabled="order.quantity >= order.inventory"
                @click="order.quantity++"><v-icon>keyboard_arrow_up</v-icon></v-btn>   
                <h2 class="headline">الكمية: {{order.quantity}} </h2>                
                <v-btn icon small color="error"
                :disabled="order.quantity <= 1"
                @click="order.quantity--"> <v-icon>keyboard_arrow_down</v-icon></v-btn>
                 </v-layout>   

                
                  

                  <v-btn icon flat color="error"
                  @click="deleteOrder(order)"><v-icon>delete</v-icon></v-btn>

                
            </v-card-actions>          
        </v-card>
        
      </v-flex>
    </v-layout>

    <v-layout row wrap justify-center v-if="orderList.length <= 0">
          
        <v-card color="primary" class="mt-5 mb-5">
          <v-card-title primary-title>
            <div>
              <br>
              <p class="headline"> سلة المشتريات فارغة </p>
            </div>
          </v-card-title>
        </v-card>
      </v-layout>

    <h2 v-if="orderList.length > 0" class="headline black--text mt-5 text-xs-center">المجموع الكلي : {{totalPrice()}} ر.س</h2>
    <v-btn v-if="orderList.length > 0" @click="completePurchase" block large nmbz color="primary" dark>اتمام الشراء</v-btn>
</v-container>

     
</template>


<script>
    export default {
        computed: {
            customer() {
               return this.$store.getters['customer/getCustomer']
            },
            orderList() {
                return this.$store.getters['customer/orderList']
            },
        },
        methods: {
            deleteOrder (order) {
               const index = this.orderList.indexOf(order)
               confirm('هل أنت متأكد من حذف المنتج؟') && this.orderList.splice(index, 1)
            },
            completePurchase() {
                this.$store.dispatch('customer/confirmedOrder')
                this.$router.push('/Order_Form')
            },
            totalPrice () {
                let totalPrice = 0
                for(let i = 0 ; i < this.orderList.length ; i++) {
                    totalPrice += (Number(this.orderList[i].price) * Number(this.orderList[i].quantity))
                }
                return totalPrice
            }
        }
    }
</script>
<style scoped>
.headline {
  font-family: 'El Messiri', 'sans-serif';
  font-weight: bold ;
  font-size: large ;
  color: white ;
}
</style>
