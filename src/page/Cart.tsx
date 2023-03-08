import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

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
// interface IobjData {
//   data: Idata[]
//   text: string
// }
interface ICartProps {
  data: Idata[] | null
}

// const data = useSelector((state: any) => {
//   return state
// }) //state는 중앙데이터 전체

// const data = useSelector(state: any)
// data.map(()=>{
//   {id:1,category:'침대',prcie:''} =>
// })
// 갯수 셀렉트 클릭시 가격변동
function Cart({ data }: ICartProps) {
  const dataFake = [
    {
      id: 0,
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/assets/163703569663018673.png',
      title: '이미지 없음',
    },
    // {
    //   id: 1,
    //   src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/167780933706404470.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1',
    //   freeDilivery: true,
    //   specialPrice: false,
    //   review: 8357,
    //   star: 4.7,
    //   price: 32900,
    //   percentSale: 40,
    //   title: '헬로우슬립',
    //   contents:
    //     '[단하루!10%쿠폰+사은품]봄맞이 침구교체 차렵이불/이불커버/패드 특가전',
    // },
  ]

  const cartData: any[] = data || dataFake

  // const cartData =
  //   data === null ? (
  //     <>
  //       <img src={`${dataFake[0].src}`} />
  //     </>
  //   ) : (
  //     data
  //   )

  // console.log(data)

  // if (!cartData.length) {
  //   return (
  //     <img
  //       src="https://image.ohou.se/i/bucketplace-v2-development/uploads/assets/163703569663018673.png"
  //       alt="이미지 없음"
  //     />
  //   )
  // }
  console.log(data)
  return (
    <div>
      {cartData.map((el: Idata) => (
        <img src={el.src} alt={el.title} key={el.id} />
      ))}
    </div>
  )
}

export default Cart
