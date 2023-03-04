import Carousel from 'nuka-carousel/lib/carousel'
import React from 'react'
import styled from 'styled-components'
import { Img, TitleEl, TopTitle } from './BoxItem'
interface Idata {
  id: number
  src: string
  text: string
}
interface IdataObj {
  data: Idata[]
}
const CategorySlide = ({ data }: IdataObj) => {
  return (
    <div className="CategorySlide">
      <Wrapper>
        <TopTitle>
          <TitleEl>카테고리</TitleEl>
        </TopTitle>
        <Carousel slidesToShow={10}>
          {data.map((el) => (
            <div key={el.id}>
              <Img src={el.src} alt={`${el.id}`} />
              <Text>{el.text}</Text>
            </div>
          ))}
        </Carousel>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin-top: 50px;
`
const Text = styled.div`
  color: #424242;
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  justify-content: center;
  display: flex;
`
const SlideButton = styled.div``
export default CategorySlide
