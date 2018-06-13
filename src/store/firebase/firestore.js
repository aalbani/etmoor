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
  signupNewUser (userInfo, callback) {
    return firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    .then(user => {
      const newUser = {
        email: userInfo.email,
        id: user.uid,
        user: {
          orders: [],
          location: {},
          authLevel: 0
        }
      }
      firestore.collection('USER').doc(user.uid).set({
        orders: [],
        location: {},
        authLevel: 0
      })
      callback(newUser)
    })
  },
  login (loginInfo, cb) {
    return firebase.auth().signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
      .then(user => {
        firestore.collection('USER').doc(user.uid).get()
        .then(data => {
          const loginUser = {
            user: data.data(),
            email: loginInfo.email,
            uid: user.uid
          }
          cb(loginUser)
        })
      })
  },
  signout () {
    firebase.auth().signOut()
  },
  addNewOrder (orderForm) {
    return firestore.collection('ORDER').add({
      order: orderForm,
      tasked: false,
      deliverd: false
    })
  },
  updateUser (uid, form) {
    console.log(uid, form)
    return firestore.collection('USER').doc(uid).update({
      orders: form.order,
      location: {
        firstName: form.firstName,
        lastName: form.lastName,
        phoneNumber: form.phoneNumber,
        region: form.region,
        hood: form.hood
      }
    })
  },
  getOrdersAndCounts () {
    return firestore.collection('ORDER').get()
    .then(querySnapshot => {
      const count = {
        totalCount: 0,
        northCount: 0,
        southCount: 0,
        eastCount: 0,
        westCount: 0,
        centerCount: 0,
        outCount: 0
      }
      let array = []
      let cb = null
      querySnapshot.forEach(document => {
        count.totalCount++
        if (document.data().order.region === 'شرق الرياض') {
          count.eastCount++
        }
        if (document.data().order.region === 'غرب الرياض') {
          count.westCount++
        }
        if (document.data().order.region === 'شمال الرياض') {
          count.northCount++
        }
        if (document.data().order.region === 'جنوب الرياض') {
          count.southCount++
        }
        if (document.data().order.region === 'وسط الرياض') {
          count.centerCount++
        }
        if (document.data().order.region === 'أخرى') {
          count.outCount++
        }
        array.push(document.data())
      })
      cb = {array, count}
      return cb
    }).catch(error => console.log(error))
  }
}
