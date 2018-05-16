<template>
   <main>store </main>
</template>


<script>
import db from '../store/firebase/firestore'
    export default {
        data() {
            return {
                products: []
            }
        },
        created() {
         db
        }
    }
</script>