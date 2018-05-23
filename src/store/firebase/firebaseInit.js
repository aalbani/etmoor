import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
// export this function for use
firebase.firestore().settings({
  timestampsInSnapshots: true
})

export default firebaseApp.firestore()
