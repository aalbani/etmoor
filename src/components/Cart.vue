<template>
  <v-container grid-list-xs>
     <v-btn color="success" @click="logger">text</v-btn>
     <p v-if="okey">{{products}}</p>
  </v-container>
  
</template>


<script>
import db from '../store/firebase/firestore'
    export default {
        data() {
            return {
                okey : false
            }
        },
        computed: {
            products() {
                this.$store.getters['products/getProducts']
            }
        },
        methods: {
            logger(){
                this.okay = true
                console.log(this.products)
            }
        },
        created() {
            this.$store.dispatch('products/initProducts')
        }
    }
</script>