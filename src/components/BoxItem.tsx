import React from 'react'
import styled from 'styled-components'
import FreeDelivery from '../asset/FreeDelivery'
import SpecialPrice from '../asset/SpecialPrice'

interface Idata {
  id: number
  src: string
  freeDilivery: boolean
  specialPrice: boolean
  review: number
  star: number
  price: number
  title: string
  contents: string
  percentSale: number
}
interface IobjData {
  data: Idata[]
}
const BoxItem = ({ data }: IobjData): React.ReactElement => {
  return (
    <Wrapper>
      <TopTitle>
        <TitleEl>오늘의딜</TitleEl>
        <MoreEl>더보기</MoreEl>
      </TopTitle>
      <BoxWrap>
        {data &&
          data?.map((el) => (
            <BoxEl key={el.id}>
              <Img src={el.src} />
              <ContentWrap>
                <Title>{el.title}</Title>
                <Contents>{el.contents}</Contents>
                <div>{el.percentSale}</div>
                <div>{el.price}</div>
                <div>{el.star}</div>
                <div>{el.review}</div>
                {el.specialPrice === true ? <SpecialPrice /> : null}
                {el.freeDilivery === true ? <FreeDelivery /> : null}
              </ContentWrap>
            </BoxEl>
          ))}
      </BoxWrap>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 50px;
`
export const TopTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const MoreEl = styled.div`
  margin-right: 7px;
  color: #f77;
  font-weight: 700;
  font-size: 15px;
  transition: opacity 0.1s;
  cursor: pointer;
`
export const TitleEl = styled.div`
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
  margin-right: 15px;
  position: relative;
`
export const Img = styled.img`
  /* position: absolute;
  top: 50%;
  left: 50%; */
  width: 100%;
  transition: transform 0.2s;
`
const ContentWrap = styled.div`
  margin-top: 9px;
`
const Title = styled.div`
  display: block;
  font-size: 11px;
  color: #828c94;
`
const Contents = styled.div`
  margin-top: 5px;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  max-height: 34px;
  -webkit-line-clamp: 2;
`
export default BoxItem
