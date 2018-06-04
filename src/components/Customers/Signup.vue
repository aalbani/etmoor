<template>
<v-container grid-list-md>
  
<v-form ref="form" v-model="valid" lazy-validation>

<v-layout row wrap>


    <v-flex xs12>
    <v-text-field
      v-model="email"
      label='الإيميل'
      :rules="emailRules"
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
          v-model="password"
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
      v-model="region"
      :items="regions"
      :rules="selectRules"
      label="المنطقة"
      required
    ></v-select>
    </v-flex>

    <v-flex xs12 >
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
      password: '',
      email: '',
      showPass: true,
      hood: null,
      city: null,
      region: null,
      cities: ['الرياض'],
      regions: ['وسط الرياض', 'جنوب الرياض', 'غرب الرياض','شرق الرياض','شمال الرياض'],
      nameRules: [
        v => v.length >= 2 || 'this field can\'t be less than 2 characters'
      ],
      phoneRules: [
        v => v.length >= 10 || 'Phone number can\'t be less than 10 characters'
      ],
      selectRules: [
        v => !!v || 'Item is required'
      ],
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
          
            const newUser = {
              firstName: this.firstName,
              lastName: this.lastName,
              phoneNumber: this.phoneNumber,
              email: this.email,
              city: this.city,
              hood: this.hood,
              password: this.password
            }
            console.log(newUser)
            this.$store.dispatch('user/signupNewUser', newUser)

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
