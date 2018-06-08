<template>
    <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>

        <v-layout row wrap class="justify-center">
            <v-flex xs12 sm6>
              <v-card class="primary">
                  <v-card-title class="headline justify-center">
                    تسجيل حساب جديد
                  </v-card-title>
                <v-card-actions>
                  <v-flex xs12>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="البريد الإلكتروني"
                    box
                    required
                  ></v-text-field>
                  </v-flex>
                </v-card-actions>

                <v-card-actions>
                    <v-text-field
                        :append-icon="showPass ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (showPass = !showPass)"
                        :type="showPass ? 'password' : 'text'"
                        label="الرمز السري"
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
                        :loading="loading"
                        >
                            تسجيل 
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
      passwordRules: [
        v => v.length >= 8 || 'password can\'t be less than 8 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
    }),
    computed: {
      isAuth() {
        return this.$store.getters['user/isAuth']
      },
      loading() {
        return this.$store.getters['user/loading']
      }
    },
    watch : {
       isAuth (value) {
        if (value === true) {
          this.$router.replace('/')
        }
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          
            const newUser = {
              email: this.email,
              password: this.password
            }
            this.$store.dispatch('user/signupNewUser', newUser)
          }
        },
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
