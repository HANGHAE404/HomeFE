// axios요청들어가는 모든 모듈
import React from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import api from './api'
const addTodos = async (newCart: any) => {
  await api.post(`/cart`, newCart)
}
const getTodos = async () => {
  const res = await api.get(`/cart`)
  return res.data
}

export { addTodos, getTodos }
