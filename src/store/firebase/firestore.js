import firestore from './firebaseInit'
import { firebase } from '@firebase/app'

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
          'inventory': document.data().inventory,
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
      city: customer.city,
      hood: customer.hood,
      order: customer.order
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
  },
  sendInquiry (inquiryForm) {
    firestore.collection('INQUIRY').add({
      type: inquiryForm.select,
      firstName: inquiryForm.firstName,
      lastName: inquiryForm.lastName,
      email: inquiryForm.email,
      phoneNumber: inquiryForm.phoneNumber,
      massegeText: inquiryForm.massegeText
    })
    .then(response => response)
    .catch(error => console.log(error))
  },
  updateInventory (updatedProducts) {
    for (let i = 0; i < updatedProducts.length; i++) {
      firestore.collection('PRODUCTS').doc(updatedProducts[i].id).update({
        inventory: updatedProducts[i].inventory
      })
      .then(response => console.log('success'))
      .catch(err => console.log(err))
    }
  },
  signupNewUser (userInfo) {
    firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    .then(response => {
      alert('تم تسجيل حساب جديد بنجاح')
      console.log(userInfo)
      firestore.collection('USER').doc(userInfo.email).set({
        authLevel: 0,
        orders: [],
        location: {}
      })
    })
    .catch(err => {
      alert('حصل خطأ')
      console.log(err)
    })
  },
  login (loginInfo, cb) {
    firebase.auth().signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
    .then(response => {
      firestore.collection('USER').doc(loginInfo.email).get()
      .then(r => {
        const userDetails = r.data()
        console.log(userDetails)
        alert('تم تسجيل الدخول بنجاح')
        cb(userDetails)
      })
    })
    .catch(err => {
      alert('حصل خطأ')
      console.log(err)
    })
  }

}
