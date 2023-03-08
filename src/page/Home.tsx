import React from 'react'
import styled from 'styled-components'
import Icon from '../asset/Icon'
import MenuCategorys from '../components/MenuCategory'
import CarouselComp from './CarouselComp'
import Cart from './Cart'
import {
  cateGoryData,
  CategorySlideData,
  PopProductsData,
  todayDealData,
} from '../constants/dummyData'
import BoxItem from '../components/BoxItem'
import CategorySlide from '../components/CategorySlide'
import PlusIcon from '../asset/PlusIcon'
import { getUser } from '../util/localstorage'
import { Link } from 'react-router-dom'
function Home() {
  const userInfo = getUser()
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
      {userInfo && userInfo ? (
        <Link to={'/create'}>
          <PlusWrap>
            <PlusIcon />
          </PlusWrap>
        </Link>
      ) : null}
    </div>
  )
}

const PlusWrap = styled.div`
  cursor: pointer;
  width: 60px;
  position: fixed;
  right: 30px;
  bottom: 30px;
`

const Wrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
`
export default Home
