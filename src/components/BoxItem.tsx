import React from 'react'
import styled from 'styled-components'

function BoxItem() {
  return (
    <Wrapper>
      <TopTitle>
        <TitleEl>오늘의딜</TitleEl>
        <MoreEl>더보기</MoreEl>
      </TopTitle>
      <BoxWrap>
        {[1, 2, 3, 4].map((el) => (
          <BoxEl>{el}</BoxEl>
        ))}
      </BoxWrap>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 50px;
`
const TopTitle = styled.div`
  display: flex;
  justify-content: space-between;
`
const MoreEl = styled.div`
  margin-right: 7px;
  color: #f77;
  font-weight: 700;
  font-size: 15px;
  transition: opacity 0.1s;
  cursor: pointer;
`
const TitleEl = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 20px;
  flex: 1 0 0px;
`
const BoxWrap = styled.div`
  display: flex;
`
const BoxEl = styled.div`
  width: calc(100% / 4);
  height: 300px;
  background-color: blue;
  margin-right: 15px;
`

export default BoxItem
