import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Cart from '../asset/Cart'
import { getTodos } from '../axios/cart'
import { BoxWapper, CartLength } from '../page/TopNav'

function CartComponent() {
  const navigate = useNavigate()
  const { isLoading, isError, data } = useQuery('cart', getTodos)
  return (
    <BoxWapper onClick={() => navigate('/cart')}>
      <Cart></Cart>
      <CartLength>{!isLoading && data ? data.length : 0}</CartLength>
    </BoxWapper>
  )
}

export default CartComponent
