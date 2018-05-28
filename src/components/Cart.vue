<template>
        
<v-container fluid grid-list-lg>
    <v-layout>
      <v-flex xs12 sm6 lg3 v-for="order in orderList" :key="order.dateType">
        <v-card>
            <v-card-media
              contain
              height="200px"
            >
              <img :src="order.datImage">
            </v-card-media>
            <v-card-actions>
              <v-layout row wrap class="justify-center text-xs-center">
                  <v-flex xs12 class="justify-center text-xs-center">
                <h2>{{order.arabicTitle}}</h2>
                <h2>السعر: {{order.price}} ر.س</h2>                    
                  </v-flex>
                    
                <v-btn icon small color="error"
                :disabled="order.quantity <= 0"
                @click="order.quantity--"> <v-icon>keyboard_arrow_down</v-icon></v-btn>
                <h2>الكمية: {{order.quantity}} </h2>   
                <v-btn icon small color="success"
                @click="order.quantity++"><v-icon>keyboard_arrow_up</v-icon></v-btn>
                </v-layout>
                
                  

                  <v-btn icon flat color="error"
                  @click="deleteOrder(order)"><v-icon>delete</v-icon></v-btn>

                
            </v-card-actions>          
        </v-card>
        
      </v-flex>
    </v-layout>
    <h2 v-if="orderList.length > 0" class="headline black--text mt-5 text-xs-center">المجموع الكلي : {{totalPrice()}} ر.س</h2>
    <v-btn v-if="orderList.length > 0" @click="completePurchase" block large nmbz color="primary" dark>اتمام الشراء</v-btn>
</v-container>

     
</template>


<script>
    export default {
        data() {
            return {
                okey : false
            }
        },
        computed: {
            customer() {
               return this.$store.getters['customer/getCustomer']
            },
            orderList() {
                return this.$store.getters['customer/orderList']
            }
        },
        methods: {
            deleteOrder (order) {
               const index = this.orderList.indexOf(order)
               confirm('are you sure ?') && this.orderList.splice(index, 1)
               console.log(this.orderList)
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
<style>
.headline {
  font-family: 'Tajawal', sans-serif;
  font-weight: bold ;
  font-size: large ;
  color: white ;
}
</style>
