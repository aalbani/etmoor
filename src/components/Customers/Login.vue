<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>

        <v-layout row wrap class="justify-center">
            <v-flex xs12 sm6>
              <v-card class="primary">
                  <v-card-title class="headline justify-center">
                    تسجيل الدخول
                  </v-card-title>
                <v-card-actions>
                      <v-text-field
                        v-model="email"
                        label='الإيميل'
                        :rules="emailRules"
                        box
                        required
                      ></v-text-field>
                </v-card-actions>
                <v-card-actions>
   
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

                </v-card-actions>
                <v-card-actions>
                    <v-btn
                        color="secondary"
                        block
                        large
                        :disabled="!valid"
                        @click="submit"
                        >
                            تسجيل الدخول
                    </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
        </v-layout>
        </v-form>
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
          
            const loginInfo = {
              email: this.email,
              password: this.password
            }
            this.$store.dispatch('user/login', loginInfo)
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
