<template>
<v-container grid-list-md>
  
<v-form ref="form" v-model="valid" lazy-validation>

<v-layout row wrap>

    <v-flex xs12>
    <v-select
      v-model="select"
      :items="items"
      :rules="selectRules"
      label="الرجاء إختيار الفئة"
      required
    ></v-select>
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

    <v-flex xs12 sm6>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="البريد الإلكتروني"
      box
      required
    ></v-text-field>
    </v-flex>

    <v-flex xs12 sm6>
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
      <v-text-field
        label="كيف نقدر نساعدك؟"
        textarea
        :rules="massegeRules"
        :counter="100"
        v-model="massegeText"
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
      select: null,
      items: [
        'شكوى',
        'استفسار',
      ]
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          const inquiryForm = {
              select: this.select,
              firstName: this.firstName,
              lastName: this.lastName,
              phoneNumber: this.phoneNumber,
              email: this.email,
              massegeText: this.massegeText
          }
          console.log(inquiryForm)
          this.$store.dispatch('customer/sendInquiry', inquiryForm)
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>