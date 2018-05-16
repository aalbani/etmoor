import Vue from 'vue'
import Vuex from 'vuex'
import VueFirestore from 'vue-firestore'
import Firebase from 'firebase'

require('firebase/firestore')

Vue.use(VueFirestore)
Vue.use(Vuex)
var firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyB-ZDVyxAH1Z3JOGb9-vNjRE_xF2FyWpww',
  authDomain: 'etmoor-f5f1c.firebaseapp.com',
  databaseURL: 'https://etmoor-f5f1c.firebaseio.com',
  projectId: 'etmoor-f5f1c',
  storageBucket: 'etmoor-f5f1c.appspot.com',
  messagingSenderId: '427591939010'
})

const firestore = firebaseApp.firestore()

export const store = new Vuex.Store({

  state: {
    db: firestore.collection('PRODUCTS')

  }
})
