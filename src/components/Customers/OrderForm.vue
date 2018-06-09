<template>
<v-container grid-list-md>
  
<v-form ref="form" v-model="valid" lazy-validation>

<v-layout row wrap>

    <v-flex xs12 sm6>
    <v-text-field
      v-model="firstName"
      label="الاسم الأول"
      :rules="nameRules"
      box
      required
    ></v-text-field>
    </v-flex>

    <v-flex xs12 sm6>
    <v-text-field
      v-model="lastName"
      label="اسم العائلة"
      :rules="nameRules"
      box
      required
    ></v-text-field>
    </v-flex>

    <v-flex xs12>
    <v-text-field
      v-model="phoneNumber"
      label="رقم الجوال"
      :rules="phoneRules"
      box
      required
      mask="##########"
    ></v-text-field>
    </v-flex>
  
    <v-flex xs12>
    <v-select
      v-model="city"
      :items="cities"
      :rules="selectRules"
      label="المدينة"
      required
    ></v-select>
    </v-flex>

    
    <v-flex xs12>
    <v-select
      v-model="region"
      :items="regions"
      :rules="selectRules"
      label="المنطقة"
      required
    ></v-select>
    </v-flex>

    <v-flex xs12>
    <v-text-field
      v-model="hood"
      label="الحي"
      :rules="nameRules"
      box
      required
    ></v-text-field>
    </v-flex>
    
    <v-flex xs12 text-xs-center>
    <v-btn
      color="primary"
      large
      :disabled="!valid"
      @click="submit"
    >
      إرسال
    </v-btn>
    <v-btn color="primary" large @click="clear">مسح</v-btn>
    </v-flex>


</v-layout>
</v-form>
</v-container>
</template>

<script>

  export default {
    data: () => ({
      valid: true,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      massegeText: '',      
      email: '',
      hood: '',
      region: '',
      city: null,
      hood: null,
      cities: ['الرياض'],
      regions: ['شمال الرياض','شرق الرياض','غرب الرياض','جنوب الرياض','وسط الرياض'],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      nameRules: [
        v => v.length >= 2 || 'name can\'t be less than 2 characters'
      ],
      phoneRules: [
        v => v.length >= 10 || 'Phone number can\'t be less than 10 characters'
      ],
      selectRules: [
        v => !!v || 'Item is required'
      ],
    }),
    computed : {
      user () {
        return this.$store.getters['user/getUser']
      },
      order () {
        return this.$store.getters['customer/order']
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          
            const newOrderForm = {
              firstName: this.firstName,
              lastName: this.lastName,
              phoneNumber: this.phoneNumber,
              region: this.city,
              hood: this.hood,
              order: this.order
            }
            console.log(newOrderForm)
            this.$store.dispatch('order/addNewOrder', newOrderForm)
            .then(response => {
              alert('شكرا لطلبك من إي تمور , سيتم التواصل معك قريبا')
              this.$store.dispatch('user/addLocationAndOrder', newOrderForm)
              this.$store.dispatch('products/updateInventory')
              this.$store.dispatch('customer/reset')
              this.$router.push('/')
            })
            .catch(err => console.log(err) )
          }
        },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style>
</style>
