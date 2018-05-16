<template>
  <v-container grid-list-xs>
     <v-btn color="success" @click="logger">text</v-btn>
     <p v-if="okey">{{products[0]}}</p>
  </v-container>
  
</template>


<script>
import db from '../store/firebase/firestore'
    export default {
        data() {
            return {
                products: [],
                okey : false
            }
        },
        methods: {
            logger(){
                db.getProducts(this.products)
                console.log(this.products)
                this.okey = true
            }
        }
    }
</script>