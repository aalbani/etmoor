<template>
   <main>store </main>
</template>


<script>
import db from './Firebase/FirebaseInit'
    export default {
        data() {
            return {
                products: []
            }
        },
        created() {
         db.collection('PRODUCTS').get().then(query => {
             query.forEach(doc => {
                 console.log(doc.data())
                 const data = doc
             })
         })
        }
    }
</script>