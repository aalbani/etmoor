<template>
    <v-container>

        <v-layout row wrap class="justify-center">
            <v-flex xs12 sm6>
              <v-card class="primary">
                  <v-card-title class="headline justify-center">
                     الرجاء قم بـ
                  </v-card-title>
                <v-card-actions>
                    <v-btn block class="secondary" to="/login" dark>تسجيل الدخول</v-btn>
                </v-card-actions>

                  <v-card-title class="headline justify-center">
                     أو
                  </v-card-title>
                <v-card-actions>
                    <v-btn block class="secondary" to="/signup" dark>تسجيل حساب جديد</v-btn>
                </v-card-actions>
                <v-card-actions>
                </v-card-actions>
              </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
      valid: true,
      email: '',
      password: '',
      showPass: true,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => v.length >= 8 || 'password can\'t be less than 8 characters'
      ]
    }),

     methods: {
      submit () {
        if (this.$refs.form.validate()) {
          
            const newCustomer = {
              firstName: this.firstName,
              lastName: this.lastName,
              phoneNumber: this.phoneNumber,
              email: this.email,
              city: this.city,
              hood: this.hood,
            }
            this.$store.dispatch('customer/setNewCustomer', newCustomer)
            this.$store.dispatch('customer/addNewCustomer')
            .then(response => {
              alert('شكرا لطلبك من إي تمور , سيتم التواصل معك قريبا')
              this.$store.dispatch('products/updateInventory')
              this.$store.dispatch('customer/reset')
              this.$router.push('/')
            })
            .catch(err => alert('try again!') )
            
          }
        }
     }
}
</script>


<style scoped>
.headline {
  font-family:'El Messiri', sans-serif;
  font-weight: bold ;
  font-size: large ;
  color: white ;
}

</style>
