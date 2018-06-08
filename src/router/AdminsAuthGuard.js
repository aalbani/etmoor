import { store } from '../store'

export default (to, from, next) => {
  if (store.getters['user/authLevel'] >= 1) {
    next()
  } else {
    next('/login-or-signup')
  }
}
