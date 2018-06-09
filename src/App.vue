<template>
  <v-app id="bigContainer">

  <!-- NavDrawer -->
    <v-navigation-drawer temporary fixed 
    v-model="sideNav" disable-resize-watcher disable-route-watcher right>
      <v-list>
        <v-list-tile @click="sideNav = !sideNav" v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="showCart" @click="sideNav = !sideNav" :to="shoppingCart.link">
          <v-list-tile-action>
          
          <v-badge color="red" v-model="showBadge">
          <span slot="badge">{{badgeCounter()}}</span>
          <v-icon>{{shoppingCart.icon}}</v-icon>
          </v-badge>
          
          </v-list-tile-action>
          <v-list-tile-content>
            {{shoppingCart.title}}
          </v-list-tile-content>
        </v-list-tile>
        </v-list>
    </v-navigation-drawer>



  <!-- Toolbar -->
    <v-toolbar absolute app dark color="primary" height="100">
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="justify-right"><router-link id="toolbarTitle" to="/" tag="span">إي - تمور</router-link></v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon right>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      
      <v-toolbar-items v-if="showCart" id="shopingCart" class="hidden-sm-and-down">  
      <v-menu open-on-hover bottom offset-y>  
     
      <v-btn slot="activator" class="primary white--text text-xs-center" flat :to="shoppingCart.link">
          <v-badge color="red" v-model="showBadge">
          <span slot="badge">{{badgeCounter()}}</span>
          <v-icon right>{{shoppingCart.icon}}</v-icon>
          </v-badge>
          {{shoppingCart.title}}
      </v-btn>

          <v-list class="primary white--text">
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

  
    <v-toolbar-items id="shopingCart" class="hidden-md-and-up">
      <v-btn class="primary white--text text-xs-center" flat :to="shoppingCart.link">
          <v-badge color="red" v-model="showBadge">
          <span slot="badge">{{badgeCounter()}}</span>
          <v-icon right>{{shoppingCart.icon}}</v-icon>
          </v-badge>
      </v-btn>

      </v-toolbar-items>

    </v-toolbar>

<!-- toolbar End -->
  

<!-- router or contained component -->

    <v-content>
      <router-view></router-view>
    </v-content> 

<!-- footer -->
    
 <v-footer height="auto" >
    <v-card
      flat
      tile
      class="primary white--text text-xs-center"
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
  },
    menuItems () {
      let menuItems = [
        {id: '4', icon: 'home', title: 'الرئيسية', link: '/'},
        {id: '3', icon: 'store', title: 'المنتجات', link: '/Shop'},
        {id: '2', icon: 'watch_later', title: 'التوصيل', link: '/Delivery'},
        {id: '1', icon: 'message', title: 'اتصل بنا', link: '/Contact_Us'},
        {id: '00', icon: 'lock_open', title: 'التسجيل', link: '/login-or-signup'}        
      ]
      if (this.userIsAuth && this.authLevel === 0) {
      menuItems.splice(4,1,{id: '5', icon: 'account_circle', title: 'حسابي', link: '/account'})
      }
      if (this.userIsAuth && this.authLevel === 1) {
      menuItems = [
        {id: '00', icon: 'dashboard', title: 'Dashboard', link: '/admins/dashboard'},
        {id: '01', icon: 'watch_later', title: 'Tasks', link: '/admins/tasks'},        
        {id: '02', icon: 'local_shipping', title: 'Delivery', link: '/admins/deliveries'},
        {id: '03', icon: 'person', title: 'Complaints', link: '/admins/complaints'},
        {id: '04', icon: 'storage', title: 'Inventory', link: '/admins/inventory'},
        {id: '05', icon: 'schedule', title: 'History', link: '/admins/historyRecord'},

                
      ]
      }
      return menuItems
    },
    userIsAuth () {
      return this.$store.getters['user/isAuth']
    },
    authLevel () {
      return this.$store.getters['user/authLevel']
    },
    showCart () {
      if (!this.userIsAuth || this.authLevel === 0)
      return true
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
  background-color: #E2E8E8;
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
.btn__content {
    font-family: 'El Messiri', 'sans-serif';
    font-size: 13px;
}
.input-group--text-field-box:not(.input-group--textarea):not(.input-group--multi-line) label {
    top: 32px;
    text-align: right !important;
}
.input-group--text-field.input-group--textarea:not(.input-group--full-width) label {
    right: 15px;
    text-align: right;
}
.input-group.input-group--append-icon label, .input-group.input-group--prepend-icon label, .input-group.input-group--selection-controls label {
    max-width: 100%;
    text-align: right;
}
.input-group--text-field-box label {
    left: auto;
}
.admins {
  direction: ltr
}
</style>
