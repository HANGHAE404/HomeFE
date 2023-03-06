import React from 'react'
import styled from 'styled-components'

function Category() {
  return <Wrapper>Category페이지입니다.</Wrapper>
}

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`
export default Category
