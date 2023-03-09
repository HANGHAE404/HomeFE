import React, { useCallback, useState, useRef, useEffect } from 'react'
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
  const [pins, setPins] = useState<any[]>([])
  const [page, setPage] = useState(1) //스크롤이 닿았을 때 새롭게 데이터 페이지를 바꿀 state
  const [loading, setLoading] = useState(false) //로딩 성공, 실패를 담을 state

  const userInfo = getUser()
  const pageEnd = useRef<any>()
  // const {
  //   isLoading,
  //   isError,
  //   data: datas,
  // } = useQuery('goods', () => getGoods(5, 4) as any)

  const loadMore = () => {
    setPage((prev) => prev + 1)
  }
  // console.log('datas :', datas)
  const fetchPins = async (page: any) => {
    const res = await fetch(
      `http://15.165.18.86:3000/api/goods/?group=${8}&click=${page}`
    )
    const { data } = await res.json()
    setPins((prev) => [...prev, ...data])
    setLoading(true)
  }

  useEffect(() => {
    fetchPins(page)
  }, [page])
  useEffect(() => {
    if (loading) {
      //로딩되었을 때만 실행
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore()
          }
        },
        { threshold: 1 }
      )
      //옵져버 탐색 시작
      observer.observe(pageEnd.current)
    }
  }, [loading])
  console.log(pins)
  return (
    <div className="Home">
      {/* header */}
      <CarouselComp />
      <MenuCategorys cateGoryData={cateGoryData} />
      {/* main */}
      <Wrapper>
        <BoxItem data={todayDealData} text={'오늘의딜'} />
        <CategorySlide data={CategorySlideData} />
        <BoxItemFetchData data={pins} text={'테스트'} />
        {/* <BoxItem data={PopProductsData} text={'인기상품'} /> */}
        <Loading ref={pageEnd} />
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

const Loading = styled.div``
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
