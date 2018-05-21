<template>
        
<v-container fluid>
    <v-layout row wrap>
      <v-flex xs6>
        <v-card v-for="order in orderList" :key="order.dateType">
            <v-card-media
              contain
              height="200px"
            >
              <img :src="order.datImage">
            </v-card-media>
            <v-card-actions>
              <v-layout row wrap class="justify-center">
                  <v-flex xs12 class="text-xs-center">
                <h2>السعر: {{order.price}} </h2>                    
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
            }
        }
    }
</script>