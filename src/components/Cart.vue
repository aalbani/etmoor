<template>
  <v-container grid-list-xs>
     <v-btn color="success" @click="logger">text</v-btn>
     <main v-if="customer"> {{customer}}</main>
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
            }
        },
        methods: {
            logger(){
                
                this.okay = true
                this.$store.dispatch('customer/addNewCustomer')
               
            }
        }
    }
</script>