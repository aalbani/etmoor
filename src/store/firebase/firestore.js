import firestore from './firebaseInit'

export default {
    // get all products and return documents
  getProducts () {
    firestore.collection('PRODUCTS').get()
    .then(querySnapshot => {
      querySnapshot.forEach(document => document)
    }).catch(error => console.log(error))
  }
}
