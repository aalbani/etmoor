<template>
<v-container grid-list-md>
  
<v-form ref="form" v-model="valid" lazy-validation>

<v-layout row wrap>


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
          :append-icon="showPass ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (showPass = !showPass)"
          :type="showPass ? 'password' : 'text'"
          label="ادخل الرمز السري"
          :rules="passwordRules"
          box
          required
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
      v-model="hood"
      :items="Regions"
      :rules="selectRules"
      label="المنطقة"
      required
    ></v-select>
    </v-flex>

    <v-flex xs12 >
    <v-text-field
      v-model="region"
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
      تسجيل
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
      password: '',
      showPass: true,
      hood: null,
      city: null,
      region: null,
      cities: ['الرياض'],
      Regions: ['وسط الرياض', 'جنوب الرياض', 'غرب الرياض','شرق الرياض','شمال الرياض'],
      massegeRules: [
        v => v.length <= 100 || 'Max 100 characters'
      ],
      nameRules: [
        v => v.length >= 2 || 'this field can\'t be less than 2 characters'
      ],
      phoneRules: [
        v => v.length >= 10 || 'Phone number can\'t be less than 10 characters'
      ],
      selectRules: [
        v => !!v || 'Item is required'
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
        },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style>
</style>
