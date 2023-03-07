import { configureStore } from '@reduxjs/toolkit'
import login from '../modules/login'
import cart from '../modules/cart'

const store = configureStore({
  reducer: {
    cart,
    login,
  },
})
export default store
