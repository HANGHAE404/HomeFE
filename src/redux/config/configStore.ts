import { configureStore } from '@reduxjs/toolkit'
import login from '../modules/login'

const store = configureStore({
  reducer: {
    login,
  },
})
export default store
