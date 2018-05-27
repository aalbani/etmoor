<template>
    <v-container class="mt-5">
      <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-select
          :items="items"
          v-model="e1"
          label="اختر نوع"
          
        ></v-select>
      </v-flex>
      </v-layout>
    </v-container>
</template>

<style>
#texts {
  font-family: 'Tajawal', sans-serif;
  font-weight: bold ;
  font-size: large ;
  color: white ;
}
</style>
