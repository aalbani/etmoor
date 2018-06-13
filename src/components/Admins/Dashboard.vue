<template>
  <v-container fluid grid-list-md class="admins">
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6>
        <v-card color="deep-orange darken-1" dark>
          <v-flex xs12 mx-4 ma-4>
          <v-card-title primary class="title justify-center">Orders on Hold</v-card-title>
          <v-card-text class="title text-xs-center">{{count.totalCount}}</v-card-text>
          </v-flex>
        </v-card>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex d-flex xs12 sm6>
        <v-card color="white" dark>
          <v-layout row wrap>
          <v-flex xs12>
            <v-card color="indigo darken-1">
              <v-card-title primary class="title justify-center">Orders on hold By Region</v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs6 v-for="region in riyadh" :key="region.regionName">
            <v-card color="indigo darken-1">
              <v-card-title primary class="title justify-center">{{region.regionName}}</v-card-title>
              <v-card-text class="title text-xs-center">{{region.orderCount}}</v-card-text>
            </v-card>
          </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6>
        <v-layout row wrap>
          <v-flex xs12>
          <v-card color="grey darken-3" dark>
            <v-card-title primary class="title justify-center">inventory snapshot</v-card-title>
          </v-card>
        </v-flex>
          <v-flex xs12 v-for="item in inventory" :key="item.type">
          <v-card color="grey darken-3" dark>
          <v-card-text>{{item.type}} : <span class="red--text">{{item.remaining}}</span> in inventory</v-card-text>
        </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
            <v-flex d-flex xs12 sm6>
        <v-card color="green darken-3" dark>
          <v-card-title primary class="title justify-center">Today's Tasks</v-card-title>
          <v-card-title primary class="title justify-center">4/50</v-card-title>
        </v-card>
      </v-flex>
        </v-layout>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      inventory : [
        {type: 'sokry', remaining: 2},
        {type: 'khalas', remaining: 3}
      ]
    }),
    computed : {
      count() {
        return this.$store.getters['order/count']
      },
      riyadh() {
      let riyadh = [
        {regionName: 'Riyadh North', orderCount: this.count.northCount},
        {regionName: 'Riyadh South', orderCount: this.count.southCount},
        {regionName: 'Riyadh East', orderCount: this.count.eastCount},
        {regionName: 'Riyadh West', orderCount: this.count.westCount},
        {regionName: 'Riyadh Mid', orderCount: this.count.centerCount},
        {regionName: 'Outside', orderCount: this.count.outCount}
      ]
      return riyadh
      }
    },
    created () {
    this.$store.dispatch('order/initDashboard')
    }
  }
</script>