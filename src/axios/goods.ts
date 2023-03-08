// axios요청들어가는 모든 모듈
import React from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import api from './api'
const getGoods = async (group: number, click: number) => {
  const res = await axios.get(
    // 'http://15.165.18.86:3000/api/goods/?group=5&click=1'
    `http://15.165.18.86:3000/api/goods/?group=${group}&click=${click}`
  )
  return res.data
}
// http://15.165.18.86:3000/api/goods/?group=5&click=0
export { getGoods }
