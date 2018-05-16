import firestore from './firebaseInit'

export default {
    // get all products and return documents
  getProducts (array) {
    firestore.collection('PRODUCTS').get()
    .then(querySnapshot => {
      querySnapshot.forEach(document => {
        const data = {
          id: document.id,
          arabicTitle: document.data().arabicTitle,
          datImage: document.data().datImage,
          dateQuantity: document.data().dateQuantity,
          dateType: document.data().dateType
        }
        array.push(data)
      })
    }).catch(error => console.log(error))
  }
}
