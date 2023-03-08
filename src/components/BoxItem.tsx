import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BlueStar from '../asset/BlueStar'
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
  category?: string
}
interface IobjData {
  data: Idata[]
  text: string
}
const BoxItem = ({ data, text }: IobjData): React.ReactElement => {
  // useEffect(() => {
  //   axios.get('/api/goods/?start=${0}1&last=${4}) ')
  // }, [])
  return (
    <Wrapper>
      <TopTitle>
        <TitleEl>{text}</TitleEl>
        <MoreEl>더보기</MoreEl>
      </TopTitle>
      <BoxWrap>
        {data &&
          data?.map((el) => (
            <BoxEl key={el.id}>
              <Link to={`/detailpage/${el.id}`}>
                <Img src={el.src} />
                <ContentWrap>
                  <Title>{el.title}</Title>
                  <Contents>{el.contents}</Contents>
                  <PriceWrap>
                    <PricePercent>{el.percentSale}%</PricePercent>
                    <Price>{el.price}원</Price>
                  </PriceWrap>
                  <ReviwStarWrap>
                    <BlueStarWrap>
                      <BlueStar />
                      {el.star}
                    </BlueStarWrap>
                    <Review>리뷰{el.review}</Review>
                  </ReviwStarWrap>
                  {el.specialPrice === true ? <SpecialPrice /> : null}
                  {el.freeDilivery === true ? <FreeDelivery /> : null}
                </ContentWrap>
              </Link>
            </BoxEl>
          ))}
      </BoxWrap>
    </Wrapper>
  )
}
const BlueStarWrap = styled.div`
  display: flex;
  align-items: center;
`
const ReviwStarWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
const PriceWrap = styled.div`
  display: flex;
  align-items: center;
`
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
  flex-wrap: wrap;
`
const BoxEl = styled.div`
  width: calc((100% / 4) - 12px);
  margin-right: 15px;
  margin-bottom: 25px;
  position: relative;
  &:nth-of-type(4n) {
    margin-right: inherit;
  }
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
  -webkit-line-clamp: 2;
`
const PricePercent = styled.div`
  color: #35c5f0;
  font-weight: bold;
  margin-right: 4px;
`
const Price = styled.div`
  color: #000;
  margin-right: 4px;
  font-size: 17px;
  line-height: 23px;
  font-weight: 700;
`
const Review = styled.div`
  font-size: 12px;
  color: #9e9e9e;
  line-height: 16px;
  font-weight: 700;
`
export default BoxItem
