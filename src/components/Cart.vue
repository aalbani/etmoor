<template>
   <main>store : {{sokry}}</main>
</template>


<script>
    export default {
        computed: {
            sokry() {
                this.$store.getters.sokry
                console.log(this.sokry)
            }
        }
    }
</script>