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
          'dateType': document.data().dateType,
          'price': document.data().price
        }
        array.push(data)
      })
      cb(array)
    }).catch(error => console.log(error))
  },
  addCustomer (customer) {
    firestore.collection('CUSTOMER').add({
      firstName: customer.firstName,
      lastName: customer.lastName,
      phoneNumber: customer.phoneNumber,
      email: customer.email,
      country: customer.country,
      city: customer.city,
      hood: customer.hood,
      order: customer.order.array
    })
    .then(response => {
      console.log('success')
    })
    .catch(error => console.log(error))
  }
}
