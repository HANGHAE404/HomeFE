import React from 'react'
import styled from 'styled-components'
import Icon from '../asset/Icon'
import MenuCategorys from '../components/MenuCategory'
import CarouselComp from './CarouselComp'
import {
  cateGoryData,
  CategorySlideData,
  todayDealData,
} from '../constants/dummyData'
import BoxItem from '../components/BoxItem'
import CategorySlide from '../components/CategorySlide'
import PopProducts from '../components/PopProducts'
function Home() {
  return (
    <div className="Home">
      {/* header */}
      <CarouselComp />
      <MenuCategorys cateGoryData={cateGoryData} />
      {/* main */}
      <Wrapper>
        <BoxItem data={todayDealData} />
        <CategorySlide data={CategorySlideData} />
        <PopProducts data={[]} />
      </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
`
export default Home
