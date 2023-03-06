import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Carousel from 'nuka-carousel/lib/carousel'
import SelectBoxs from '../components/SelectBoxs'
import SpecialPrice from '../asset/SpecialPrice'
interface IProduct {
  postId: number
  userId: string
  name: string
  content: string
  price: number
  option: string
  fileUrl: string
  likeState: boolean
  likesCount: number
  commentsCount: number
  createdAt: string
  updatedAt: string
  nickname: string
}
function DetailPage() {
  const [index, setIndex] = useState(1)
  let data = {
    postId: 1,
    userId: 1,
    name: '김영현',
    content:
      '[오늘의딜][10%쿠폰] 부드러운 카스테라 항균 옥수수솜 간절기/사계절 차렵이불세트 ',
    price: 35900,
    option: [
      ['옵션선택1-1', '옵션선택1-2', '옵션선택1-3'],
      ['옵션선택2-1', '옵션선택2-2', '옵션선택2-3'],
      ['옵션선택3-1', '옵션선택3-2', '옵션선택3-3'],
    ],
    fileUrl: [
      {
        image:
          'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/167168822852557476.jpg?gif=1&w=480&h=480&c=c&webp=1',
      },
      {
        image:
          'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/165483857498060691.jpg?gif=1&w=850&h=850&c=c&webp=1',
      },
      {
        image:
          'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/163954836096034921.jpg?gif=1&w=850&h=850&c=c&webp=1',
      },
      {
        image:
          'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/167325400379240034.jpg?gif=1&w=480&h=480&c=c&webp=1',
      },
      {
        image:
          'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/162884149629538561.jpg?gif=1&w=480&h=480&c=c&webp=1',
      },
      {
        image:
          'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/164396611926039690.jpg?gif=1&w=480&h=480&c=c&webp=1',
      },
      {
        image:
          'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/166856262873508761.jpg?gif=1&w=480&h=480&c=c&webp=1',
      },
      {
        image:
          'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/images/167325399665909385.jpg?gif=1&w=480&h=480&c=c&webp=1',
      },
    ],
    likeState: false,
    likesCount: 1,
    commentsCount: 0,
    createdAt: '2023-02-22T07:08:31.000Z',
    updatedAt: '2023-02-22T07:08:31.000Z',
    nickname: '테스트계정',
  }
  const [isData, setData] = useState<any>(data)
  const params = useParams()
  //   useEffect(() => {
  //     //   axios.get(`/api/goods/${params}`)
  //     // setData(data)
  //     console.log('isData : ', isData)
  //   }, [])
  console.log(data.option)
  const CartBtnHandler = () => {
    alert('CartBtnHandler')
  }

  const PurChaseHandler = () => {
    alert('PurChaseHandler')
  }
  return (
    <DetailWrapper>
      <TopContentWrap>
        <TopLeftContents>
          <CarouselWrap>
            <Carousel
              slideIndex={index}
              wrapAround={true}
              renderCenterLeftControls={({}) => null}
              renderCenterRightControls={({}) => null}
            >
              {data.fileUrl.map((pd: any) => (
                <div key={pd.id}>
                  <img
                    src={pd.image}
                    alt={`${pd.id}`}
                    style={{
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '15px',
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </CarouselWrap>
          <TapCarousel>
            {data.fileUrl.map((item, idx) => (
              <div key={idx} onClick={() => setIndex(idx)}>
                <img
                  src={item.image}
                  alt={item.image}
                  style={{
                    width: '56px',
                    height: '56px',
                    margin: '8px 8px 0 0',
                    borderRadius: '3px',
                  }}
                />
              </div>
            ))}
          </TapCarousel>
        </TopLeftContents>
        <TopRightContents>
          <div key={data.postId}>
            <RightTitle>데코뷰</RightTitle>
            <RightContents>{data.content}</RightContents>
            <RightPriceWrap>
              <RightPrice>{data.price}</RightPrice>
              <Won>원</Won>
              <SpecialPrice />
            </RightPriceWrap>
          </div>
          {data.option.map((el: any, idx) => (
            <SelectBoxs optionData={el}></SelectBoxs>
          ))}
          <BtnWrap>
            <CartBtn onClick={CartBtnHandler}>장바구니</CartBtn>
            <PurchaseBtn onClick={PurChaseHandler}>구매하기</PurchaseBtn>
          </BtnWrap>
        </TopRightContents>
      </TopContentWrap>
    </DetailWrapper>
  )
}
const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
`
const PurchaseBtn = styled.button`
  padding: 13px 10px 14px;
  font-size: 17px;
  line-height: 26px;
  border-color: #09addb;
  background-color: #09addb;
  color: #fff;
  border: 1px solid #09addb;
  border-radius: 5px;
  width: 50%;
`
const CartBtn = styled.button`
  width: 50%;
  border: 1px solid #09addb;
  border-radius: 5px;
  background-color: #fff;
  border-color: #35c5f0;
  color: #35c5f0;
  padding: 13px 10px 14px;
  font-size: 17px;
  line-height: 26px;
`
const RightPriceWrap = styled.div`
  line-height: 1;
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
  display: flex;
  align-items: center;
`
const Won = styled.div`
  font-size: 26px;
  font-weight: 400;
  margin-right: 5px;
`
const RightPrice = styled.span`
  font-size: 30px;
  font-weight: 900;
  margin-right: 2px;
`
const RightTitle = styled.div`
  color: #656e75;
  font-weight: bold;
`
const RightContents = styled.div`
  font-size: 22px;
  line-height: 33px;
  min-height: 43px;
  margin: 0 92px 0 0;
`
const TapCarousel = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const TopLeftContents = styled.div`
  width: 50%;
  margin-right: 15px;
  margin-left: 30px;
`
const TopRightContents = styled(TopLeftContents)``
const CarouselWrap = styled.div`
  width: 100%;
`
const DetailWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: calc(100% - 120px);
  max-width: 1080px;
  box-sizing: border-box;
  min-height: 1px;
`
const TopContentWrap = styled.div`
  display: flex;
  margin-top: 30px;
`
export default DetailPage
