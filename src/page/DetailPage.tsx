import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Carousel from 'nuka-carousel/lib/carousel'
import SelectBoxs from '../components/SelectBoxs'
import SpecialPrice from '../asset/SpecialPrice'
import { cartCreate } from '../redux/modules/cart'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { addTodos, getTodos } from '../axios/cart'
import { getUser } from '../util/localstorage'
import { useDispatch } from 'react-redux'

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
  const queryClient = useQueryClient()

  const { isLoading, isError, data: dataSet } = useQuery('todos', getTodos)
  const userInfo = getUser()
  let data = {
    postId: 1,
    userId: 1,
    name: '김영현',
    content:
      '[오늘의딜][10%쿠폰] 부드러운 카스테라 항균 옥수수솜 간절기/사계절 차렵이불세트 ',
    price: 35900,
    option: [
      {
        색상: [
          '간절기용_화이트(35,900원~86,900원)',
          '간절기용_크림아이보리(35,900원~86,900원)',
          '간절기용_핑크(35,900원~86,900원)',
        ],
      },
      {
        구성및사이즈: [
          '슈퍼싱글 이불베개세트(35900원)',
          '퀸&킹겸용 이불베개세트(56,900원)',
          '슈퍼싱글 풀세트(56,900원)',
          '퀸&킹겸용 풀세트(76,900원)',
        ],
      },
      {
        추가선택: [
          '카스테라 고정밴딩 침대패드 슈퍼싱글(SS)-화이트 (24,900원)',
          '카스테라 고정밴딩 침대패드 슈퍼싱글(SS)-크림아이보리 (24,900원)',
          '카스테라 고정밴딩 침대패드 슈퍼싱글(SS)-핑크 (24,900원)',
          '카스테라 고정밴딩 침대패드 슈퍼싱글(SS)-모카브라운 (24,900원)',
          '카스테라 고정밴딩 침대패드 슈퍼싱글(SS)-그레이 (24,900원)',
          '카스테라 고정밴딩 침대패드 슈퍼싱글(SS)-차콜 (24,900원)',
          '카스테라 고정밴딩 침대패드 슈퍼싱글(SS)-버터옐로우 (24,900원)',
          '카스테라 고정밴딩 침대패드 슈퍼싱글(SS)-블러썸 (24,900원)',
        ],
      },
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

  // const CartBtnHandler = () => {
  //   if (!userInfo) {
  //     alert('비회원입니다.')
  //     return
  //   } else {
  //     alert('장바구니에 담았습니다.')
  //     mutation.mutate(data)
  //   }
  // }
  // const mutation = useMutation(addTodos, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('cart', { refetchInactive: true })
  //   },
  // })
  const dispatch = useDispatch()

  const mutation = useMutation(addTodos)
  const CartBtnHandler = useCallback(
    async (newTodo: any) => {
      await mutation.mutateAsync(newTodo)
      dispatch(cartCreate(newTodo))
      alert('장바구니에 담았습니다.')
    },
    [mutation]
  )

  const PurChaseHandler = () => {
    alert('PurChaseHandler')
  }
  axios.get(``)
  useEffect(() => {
    axios.get(`http://15.165.18.86:3000/api/goods/${params}`).then((res) => {
      console.log('res :', res)
    })
  }, [])
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
          <div>
            {data.option.map((el: any, idx) => {
              return (
                <SelectBoxs
                  placeholder={Object.keys(el)}
                  optionData={Object.values(el)}
                  key={idx}
                ></SelectBoxs>
              )
            })}
          </div>
          <BtnWrap>
            <CartBtn
              onClick={() => {
                CartBtnHandler(data)
              }}
            >
              장바구니
            </CartBtn>
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
  cursor: pointer;
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
  cursor: pointer;
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
  margin-top: 50px;
`
export default DetailPage
