<template>
  <v-expansion-panel>
    <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
      <div slot="header">
          phone number: 4455222 || date: 24/4/2017 || Type: inquiry
      </div>
      <v-card>
          <div>
              <v-card-title primary-title>Name: fahad al feliah</v-card-title>
            <v-card-text>i ordered bs ma w9l</v-card-text>
          </div>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>