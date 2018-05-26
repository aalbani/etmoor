<template>
  <v-app id="bigContainer">

    <v-navigation-drawer right temporary absolute  v-model="sideNav" disable-resize-watcher>
      <v-list>
        <v-list-tile @click="" v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action >
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" :to="shoppingCart.link">
          <v-list-tile-action>
          
          <v-badge color="red" v-model="showBadge">
          <span slot="badge">{{badgeCounter()}}</span>
          <v-icon right>{{shoppingCart.icon}}</v-icon>
          </v-badge>
          
          </v-list-tile-action>
          <v-list-tile-content>
            {{shoppingCart.title}}
          </v-list-tile-content>
        </v-list-tile>
        </v-list>
    </v-navigation-drawer>

    <v-toolbar absolute app dark color="error" height="100">
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="justify-right"><router-link id="toolbarTitle" to="/" tag="span">إي - تمور</router-link></v-toolbar-title>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon right>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      
      <v-toolbar-items id="shopingCart" class="hidden-xs-only">  
      <v-menu open-on-hover bottom offset-y>
     
      <v-btn slot="activator" class="error white--text text-xs-center" flat :to="shoppingCart.link">
          <v-badge color="red" v-model="showBadge">
          <span slot="badge">{{badgeCounter()}}</span>
          <v-icon right>{{shoppingCart.icon}}</v-icon>
          </v-badge>
          {{shoppingCart.title}}
      </v-btn>

          <v-list class="error white--text">
            <v-subheader class="white--text">الطلبات</v-subheader>
            <v-list-tile  v-for="(item, index) in basketItems" :key="index">
            <v-list-tile-avatar>
              <img :src="item.datImage">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.arabicTitle"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-layout row wrap>
              <v-subheader class="white--text">السعر:  {{item.price}}</v-subheader>
              <v-subheader class="white--text">الكمية: {{item.quantity}}</v-subheader>
              </v-layout>
            </v-list-tile-action>
            </v-list-tile>
          </v-list>
          
    </v-menu>
      </v-toolbar-items>

    </v-toolbar>
  
  

<!-- router or contained component -->

    <v-content>
      <router-view></router-view>
    </v-content> 

<!-- footer -->
    
 <v-footer height="auto" >
    <v-card
      flat
      tile
      class="secondary lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          icon
          class="mx-3 white--text"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>
      <v-card-text class="white--text">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>


  </v-app>
</template>

<script>
export default {
  data: () => ({
  menuItems: 
    [
      {id: '4', icon: 'home', title: 'الرئيسية', link: '/'},
      {id: '3', icon: 'store', title: 'المنتجات', link: '/Shop'},
      {id: '2', icon: 'watch_later', title: 'التوصيل', link: '/Delivery'},
      {id: '1', icon: 'message', title: 'اتصل بنا', link: '/Contact_Us'}
    ],
  icons: 
    [
    'fab fa-facebook',
    'fab fa-twitter',
    'fab fa-google-plus',
    'fab fa-linkedin', 
    'fab fa-instagram'
    ],
  shoppingCart : {id: '0', icon: 'shopping_cart', title: 'سلة المشتريات', link: '/Cart'},
  sideNav : false,
  showBadge: true
  
  }),
  computed: {
    basketItems () {
     return this.$store.getters['customer/orderList']
  }     
},
methods : {
  goHome() {
    this.$router.push('/')
},
  badgeCounter() {
    let count = 0
    this.basketItems.forEach(element => {
      count++
    });
    if(count > 0) {
      this.showBadge = true
    } else {
       this.showBadge = false
    }
   
    return count
  }
},
  name: 'App'
}
</script>
<style>
#bigContainer {
  background-color: #F3D3B8;
  direction: rtl
}
#toolbarTitle {
  cursor: pointer;
  font-family: 'Rakkas', cursive;
  font-size: 40px
}
#shopingCart{
  margin-left: 10%
}
v-btn {
  font-family: 'El Messiri', sans-serif;
}
</style>
