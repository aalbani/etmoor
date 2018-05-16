import firestore from './FirebaseInit'

export default {
  getProducts () {
    firestore.collection('PRODUCTS').get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => doc)
    }).catch(error => console.log(error))
  }
}
/*
  getZip(zip, cb) {
    axios.get('http://ZiptasticAPI.com/' + zip)
      .then(response => {
        cb(response.data)
      })
      .catch(error => {
        console.log(error)
        return error
      })
  },
*/
