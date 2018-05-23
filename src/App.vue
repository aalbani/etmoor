<template>
  <v-app id="bigContainer">

    <!-- logo 
    <img id="logo"  class="hidden-xs-only" src="./assets/logo.png" height="100" width="100" @click="goHome">
-->


    <v-navigation-drawer  temporary absolute  v-model="sideNav" disable-resize-watcher>
      <v-list>
        <v-list-tile @click="" v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action >
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    

    <v-toolbar absolute app dark class="error" height="100">
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">ETMOOR</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  
  
 














<!-- toolbar
 <v-toolbar id="toolbar" color="primary" class="hidden-xs-only" absolute height="40px">
    <v-spacer></v-spacer>
    <v-toolbar-items >
        <v-menu
          transition="slide-y-transition"
          bottom
          allow-overflow
          full-width
        >
          <v-btn slot="activator" class="primary white--text" flat >
           {{ shoppingCart.title }}
           <v-icon>{{shoppingCart.icon}}</v-icon>
          </v-btn>
          <v-list>
            <v-subheader>الطلبات</v-subheader>
            <v-list-tile  v-for="(item, index) in basketItems" :key="index">
            <v-list-tile-avatar>
              <img :src="item.datImage">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.arabicTitle"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-layout row wrap>
              <v-subheader>السعر:  {{item.price}}</v-subheader>
              <v-subheader>الكمية: {{item.quantity}}</v-subheader>
              </v-layout>
            </v-list-tile-action>

            </v-list-tile>
          </v-list>
          <v-btn block :to="shoppingCart.link" color="primary" dark><v-icon>arrow_back</v-icon> <v-spacer></v-spacer> تأكيد الطلب والخروج</v-btn>
        </v-menu>
    </v-toolbar-items>
    </v-toolbar>
-->
<!-- router or contained component 
    <v-content id="content">
      
      <router-view></router-view>
       
    </v-content>
-->

  </v-app>
</template>

<script>
export default {
  data: () => ({
  menuItems: 
    [
      {id: '1', icon: 'message', title: 'اتصل بنا', link: '/Contact_Us'},
      {id: '2', icon: 'watch_later', title: 'التوصيل', link: '/Delivery'},
      {id: '3', icon: 'store', title: 'المنتجات', link: '/Shop'},
      {id: '4', icon: 'home', title: 'الرئيسية', link: '/'}
    ],
  shoppingCart : {id: '3', icon: 'shopping_cart', title: 'سلة المشتريات', link: '/Cart'},
  sideNav : false
  
  }),
  computed: {
    basketItems () {
     return this.$store.getters['customer/orderList']
  }     
},
methods : {
  goHome() {
    this.$router.push('/')
}
},
  name: 'App'
}
</script>
<style>
#bigContainer {
  background-color: #F3D3B8
}
</style>
