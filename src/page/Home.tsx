import React, { useCallback } from 'react'
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
import { useQuery } from 'react-query'
import { getGoods } from '../axios/goods'
import { useInView } from 'react-intersection-observer'
import BoxItemFetchData from '../components/BoxItemFetchData'
function Home() {
  const userInfo = getUser()

  const {
    isLoading,
    isError,
    data: datas,
  } = useQuery('goods', () => getGoods(5, 4) as any)

  // console.log('datas :', datas)

  return (
    <div className="Home">
      {/* header */}
      <CarouselComp />
      <MenuCategorys cateGoryData={cateGoryData} />
      {/* main */}
      <Wrapper>
        <BoxItem data={todayDealData} text={'오늘의딜'} />
        <CategorySlide data={CategorySlideData} />
        <BoxItemFetchData data={datas} text={'테스트'} />
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
