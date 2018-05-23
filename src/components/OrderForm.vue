<template>
    <v-container id="formContainer">
      <v-layout row wrap>
        <v-form v-model="valid" lazy-validation ref="form">
          
          <v-flex xs12>
            
          <v-text-field box 
            v-model="firstName"
            placeholder="الاسم"
            required
          ></v-text-field>

          <v-text-field box
            v-model="lastName"
            placeholder="اسم العائلة"
            required
          ></v-text-field>

                    </v-flex>

          <v-text-field box
            v-model="phoneNumber"
            placeholder="رقم الجوال"
            required
          ></v-text-field>

          <v-text-field box
            v-model="email"
            placeholder="البريد الإلكتروني"
            required
            type="email"
          ></v-text-field>

        <v-select box
          :items="countries"
          v-model="country"
          label="الدولة"
          single-line
        ></v-select>

        <v-select box
          :items="cities"
          v-model="city"
          label="المدينة"
          single-line
        ></v-select>

        <v-select box
          :items="hoods"
          v-model="hood"
          label="الحي"
          single-line
        ></v-select>

        <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>


        </v-form>
      </v-layout>
    </v-container>
</template>


<script>
export default {
  data: () => ({
    valid: false,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    country: null,
    city: null,
    hood: null,
    countries: ['المملكة العربية السعودية'],
    cities: ['الرياض'],
    hoods: ['ظهرة البديعة','الصحافة','الياسمين']

  }),
  methods : {
         async submit () {
        if (this.$refs.form.validate()) {
          
            const newCustomer = {
              firstName: this.firstName,
              lastName: this.lastName,
              phoneNumber: this.phoneNumber,
              email: this.email,
              country: this.country,
              city: this.city,
              hood: this.hood,
            }
          await this.$store.dispatch('customer/setNewCustomer', newCustomer)
            this.$store.dispatch('customer/addNewCustomer')
          }
        }
}
}
  

 /*   firstName: customer.firstName,
      lastName: customer.lastName,
      phoneNumber: customer.phoneNumber,
      email: customer.email,
      country: customer.country,
      city: customer.city,
      hood: customer.hood,
      order: customer.order
*/   
</script>
<style>
#formContainer {
  background-color: #D7CCC8
}
</style>
