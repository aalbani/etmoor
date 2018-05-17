import firestore from './firebaseInit'

export default {
    // get all products and return documents
  getProducts (array, cb) {
    firestore.collection('PRODUCTS').get()
    .then(querySnapshot => {
      querySnapshot.forEach(document => {
        const data = {
          'id': document.id,
          'arabicTitle': document.data().arabicTitle,
          'datImage': document.data().datImage,
          'dateQuantity': document.data().dateQuantity,
          'dateType': document.data().dateType
        }
        array.push(data)
      })
      cb(array)
    }).catch(error => console.log(error))
  },
  getCustomer (array, cb) {
    firestore.collection('CUSTOMER').get()
    .then(querySnapshot => {
      querySnapshot.forEach(document => {
        const data = {
          'id': document.id,
          'city': document.data().city,
          'country': document.data().country,
          'county': document.data().county,
          'hood': document.data().hood,
          'phone': document.data().phone,
          'khalas_quant': document.data().khalas_quant,
          'sokry_quant': document.data().sokry_quant
        }
        array.push(data)
      })
      cb(array)
    }).catch(error => console.log(error))
  }
}
