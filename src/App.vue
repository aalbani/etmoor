<template>
  <v-app>

    <!-- nav drawer -->
    <v-navigation-drawer
      v-model="drawer"
      absolute
      app
      temporary 
      disable-resize-watcher
      right
    >
      <v-list dense>
        <v-list-tile @click="" v-for="item in reverseItems" :key="item.id" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- toolbar -->
  <v-toolbar color="secondary" absolute app dark >
    <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-xs-only" >
        <v-btn v-for="item in menuItems" :key="item.id" :to="item.link" flat class="secondary white--text">
          {{item.title}}
          <v-icon right>{{item.icon}}</v-icon>
        </v-btn>
      </v-toolbar-items>
      
      <v-spacer></v-spacer>
      <v-toolbar-title style="cursor: pointer">إي-تمور</v-toolbar-title>
      <v-toolbar-side-icon 
      @click.stop="drawer = !drawer" 
      class="hidden-sm-and-up">
      </v-toolbar-side-icon>


    </v-toolbar>

    
<!-- logo -->
  <div id="logos">
    <img class="logo" src="./assets/logo.png" >
  </div>
<!-- main here -->


      
      

    <v-content>
       <v-container fluid>
      <router-view></router-view>
       </v-container>
    </v-content>
 
  
      

  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  menuItems: 
    [
      {id: '1', icon: 'message', title: 'اتصل بنا', link: '/Contact_Us'},
      {id: '2', icon: 'watch_later', title: 'التوصيل', link: '/Delivery'},
      {id: '3', icon: 'shopping_cart', title: 'سلة المشتريات', link: '/Cart'},
      {id: '4', icon: 'store', title: 'المنتجات', link: '/Shop'},
      {id: '5', icon: 'home', title: 'الرئيسية', link: '/'}


    ]
  
  }),
  computed: {
    reverseItems() {
        return this.menuItems.slice().reverse();
  }     
},
  name: 'App'
}
</script>
<style>
.logo {
  height: 150px;
  width: 175px;
  margin-top: 65px;
  margin-bottom: 65px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
}
#logos {
  background-color: #C8E6C9;
  margin-top: 55px;
  margin-bottom: -60px;

}
</style>
