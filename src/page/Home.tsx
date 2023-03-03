import React from 'react'
import styled from 'styled-components'
import Icon from '../asset/Icon'
import MenuCategorys from '../components/MenuCategory'
import CarouselComp from './CarouselComp'
import { cateGoryData } from '../constants/dummyData'
import BoxItem from '../components/BoxItem'
console.log(cateGoryData)
function Home() {
  return (
    <div className="Home">
      <CarouselComp />
      <MenuCategorys cateGoryData={cateGoryData} />
      <Wrapper>
        <BoxItem />
      </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
`
export default Home
