import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useQuery } from 'react-query'
import { getTodos } from '../axios/cart'
import styled from 'styled-components'

function Cart() {
  const { isLoading, isError, data } = useQuery('todos', getTodos)
  return (
    <>
      <Wrapper>
        {data &&
          data.map((el: any, idx: number) => (
            <div key={idx}>
              <div>id: {el.postId}</div>
              <div>content: {el.content}</div>
            </div>
          ))}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
`
export default Cart
