<template>
  <v-container grid-list-xs>
     <v-btn color="success" @click="logger">text</v-btn>
     <main v-if="products"> {{products}}</main>
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
            products() {
               return this.$store.getters['products/getProducts']
            }
        },
        methods: {
            logger(){
                
                this.okay = true
                
            }
        }
    }
</script>