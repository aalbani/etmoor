<template>
<!-- boxes that display a ppic (if fb has 0 will give pic of unav)
under the box will have add to cart + count -->
  <v-layout>
    <v-flex xs6>
      <v-card hover>
        <v-card-media src="https://4.imimg.com/data4/YT/WF/MY-2/mazafati-dates-500x500.jpg" 
        height="300px">
        </v-card-media>
        <v-card-title primary-title class="justify-center">
        <h3 class="headline mb-2 mt-0" >تمر سكري</h3>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
      
      }
    }
  }
</script>

<style scoped>
h3 {
  font-family: 'Tajawal', sans-serif;
  font-weight: bold ;
  font-size: xx-large
}
</style>