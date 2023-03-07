// axios요청들어가는 모든 모듈
import axios from 'axios'
import api from './api'
const addTodos = async (newCart: any) => {
  await api.post(`/cart`, newCart)
}
const getTodos = async () => {
  const response = await api.get(`/cart`)
  console.log(response.data)
  return response.data
}

export { addTodos, getTodos }
