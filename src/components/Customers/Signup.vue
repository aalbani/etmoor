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
      v-model="email"
      :rules="emailRules"
      label="البريد الإلكتروني"
      box
      required
    ></v-text-field>
    </v-flex>

    <v-flex xs12>
        <v-text-field
          :append-icon="showPass ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (showPass = !showPass)"
          :type="showPass ? 'password' : 'text'"
          name="input-10-2"
          label="ادخل الرمز السري"
          min="8"
          box
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
      v-model="hood"
      :items="Regions"
      :rules="selectRules"
      label="المنطقة"
      required
    ></v-select>
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
      password: '',
      repeatPassword: '',
      country: null,
      city: null,
      hood: null,
      cities: ['الرياض'],
      Regions: ['جنوب الرياض', 'غرب الرياض','شرق الرياض','شمال الرياض'],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      massegeRules: [
        v => v.length <= 100 || 'Max 100 characters'
      ],
      nameRules: [
        v => v.length >= 2 || 'First name can\'t be less than 2 characters'
      ],
      phoneRules: [
        v => v.length >= 10 || 'Phone number can\'t be less than 10 characters'
      ],
      selectRules: [
        v => !!v || 'Item is required'
      ],
      passwordRules: [
        v => v.length >= 8 || 'password can\'t be less than 8 characters'
      ],
      repeatPasswordRules: [
        v => v !== this.password || 'passwords don\'t match'
      ],
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
