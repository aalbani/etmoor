<template>
    <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card class="primary mt-3">
              <v-card-actions class="justify-center">
                <v-btn color="secondary" @click="signout">تسجيل الخروج</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      
    </v-container>
</template>
<script>
export default {
  methods: {
    signout() {
      this.$store.getters['user/signout']
    }
  }
}
</script>