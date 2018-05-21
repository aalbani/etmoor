<template>
  <v-app>

    <!-- logo -->
    <img id="logo"  class="hidden-xs-only" src="./assets/logo.png" height="100" width="100" @click="goHome">

    <!-- BUTTONS ABOVE PAGE-->
    <v-container id="contain" fluid class="hidden-xs-only" >
      <v-layout row wrap justify-end style="margin-right: 100px;">
          <v-btn id="btn" v-for="item in menuItems" :key="item.id" :to="item.link" round class="primary white--text mt-5">
          {{item.title}}
          <v-icon right>{{item.icon}}</v-icon>
        </v-btn>
      </v-layout>
    </v-container>
    
<!-- toolbar-->
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

    

<!-- router or contained component -->
    <v-content id="content">
      
      <router-view></router-view>
       
    </v-content>
      

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
  shoppingCart : {id: '3', icon: 'shopping_cart', title: 'سلة المشتريات', link: '/Cart'}
  
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
#logo {
  position: absolute;
  right: 60px;
  top: 30px;
  cursor: pointer;
}
#btn {
  top: 30px;
  right: 50px

}
#toolbar {
  top: 140px;
}
#content {
  margin-top: 100px
}
</style>
