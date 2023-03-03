import React from 'react'
import styled from 'styled-components'
import Icon from '../asset/Icon'
import MenuCategorys from '../components/MenuCategory'
import CarouselComp from './CarouselComp'
import { cateGoryData } from '../constants/dummyData'
console.log(cateGoryData)
function Home() {
  return (
    <div className="Home">
      <CarouselComp />
      {/* <MenuCategorys cateGoryData={cateGoryData} /> */}
    </div>
  )
}
export default Home
