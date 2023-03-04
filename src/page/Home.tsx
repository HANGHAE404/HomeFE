import React from 'react'
import styled from 'styled-components'
import Icon from '../asset/Icon'
import MenuCategorys from '../components/MenuCategory'
import CarouselComp from './CarouselComp'
import {
  cateGoryData,
  CategorySlideData,
  PopProductsData,
  todayDealData,
} from '../constants/dummyData'
import BoxItem from '../components/BoxItem'
import CategorySlide from '../components/CategorySlide'
function Home() {
  return (
    <div className="Home">
      {/* header */}
      <CarouselComp />
      <MenuCategorys cateGoryData={cateGoryData} />
      {/* main */}
      <Wrapper>
        <BoxItem data={todayDealData} text={'오늘의딜'} />
        <CategorySlide data={CategorySlideData} />
        <BoxItem data={PopProductsData} text={'인기상품'} />
      </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
`
export default Home
