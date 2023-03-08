import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getCookie } from '../util/cookie'
import styled from 'styled-components'
import { title } from 'process'
import { getUser } from '../util/localstorage'

function CreateForm() {
  const navigate = useNavigate()
  const fileSizeMax = 3 * 1024 * 1024 // 3mb 제한
  let inputRef
  let token = getCookie('accessToken') // 쿠키에저장
  const [image, setImage] = useState([])
  const [previewImg, setPreviewImg] = useState('')
  const [data, setData] = useState({
    title: '',
    content: '',
    price: '',
    option: '',
    freeDilivery: '',
    specialPrice: '',
    percentSale: '',
  })
  const userInfo = getUser()
  const onClickHandler = async (e: any) => {
    e.preventDefault()
    if (image.length === 0) return alert('이미지를 넣어주세요.')
    if (data.title.trim() === '') {
      return alert('제목을 입력해주세요.')
    } else if (data.title.length > 20) {
      return alert('글자 수 초과!')
    }

    const formData = new FormData()
    for (let i = 0; i < image.length; i++) {
      formData.append('image', image[i])
    }

    // formData에 객체를 JSON문법에 맞게 변형
    const {
      title,
      content,
      price,
      freeDilivery,
      specialPrice,
      percentSale,
      option,
    } = data
    const body = JSON.stringify({
      userId: userInfo.userId,
      title,
      content,
      price,
      option,
      freeDilivery,
      specialPrice,
      percentSale,
    })
    console.log('body :', body)
    const blob = new Blob([body], { type: 'application/json' })
    console.log('blob :  ', blob)

    formData.append('title', title)
    formData.append('content', content)
    formData.append('price', price)
    formData.append('freeDilivery', freeDilivery)
    formData.append('specialPrice', specialPrice)
    formData.append('percentSale', percentSale)
    formData.append('option', option)
    console.log('formData : ', formData)
    // for (let i of formData.entries()) console.log('key', i)
    for (var entries of formData.keys()) console.log(entries)
    // axios 활용 서버에 전송 하기

    // userId,
    // title,
    // content,
    // price,
    // option,
    // freeDilivery,
    // specialPrice,
    // percentSale,
    // image
    const res = await axios({
      method: 'POST',
      url: `http://15.165.18.86:3000/api/goods`,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.log(res)
        alert('작성완료')
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        alert(error.response.data.message)
      })

    // 데이터 내용 초기화
    // setImage([])
    // setData({
    //   userId: '',
    //   title: '',
    //   content: '',
    //   price: '',
    //   option: '',
    //   freeDilivery: '',
    //   specialPrice: '',
    //   percentSale: '',
    //   image: '',
    // })
    // setPreviewImg('')
  }
  const onChangeHandler = (e: any) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  // 이미지 업로드 및 미리보기
  const imgHandler = async (e: any) => {
    const {
      target: { files },
    } = e
    // console.log('files : ', files)
    // 파일이 없을때 체크
    if (!files[0]) return

    let reg = /(.*?)\.(jpg|jpeg|png|webp)$/
    for (let i = 0; i < files.length; i++) {
      // 파일 확장자 체크
      if (!files[i].name.match(reg)) {
        e.target.value = ''
        setPreviewImg('')
        alert(
          `업로드 가능한 확장자가 아닙니다. [가능한 확장자 : jpg jpeg png webp]`
        )
        return
      }
      // 파일 용량 체크
      if (files.size > fileSizeMax) {
        e.target.value = ''
        setPreviewImg('')
        alert('업로드 가능한 최대 용량은 3MB입니다!!!')
        return
      }
    }

    // 이미지를 state에 셋
    setImage(files)
    // 미리보기용 url
    const objectURL = URL.createObjectURL(e.target.files[0])
    setPreviewImg(objectURL)
  }

  useEffect(() => {
    //클린업
    return () => {
      URL.revokeObjectURL(previewImg)
    }
  }, [])
  return (
    <CreateWrapper>
      <Forms onSubmit={onClickHandler}>
        <ImgForm>
          <Img alt="이미지 들어가는 곳" src={previewImg} />
          <ImgInput
            type="file"
            multiple
            name="image"
            accept="image/jpg,jpeg,png,webp"
            onChange={imgHandler}
            onClick={(e: any) => (e.target.value = null)}
            ref={(refParam) => (inputRef = refParam)}
          />
        </ImgForm>
        <CreateFormWrapIn>
          <input
            type="text"
            name="title"
            onChange={onChangeHandler}
            maxLength={20}
            placeholder="title"
          />

          <input
            type="text"
            name="content"
            onChange={onChangeHandler}
            placeholder="content"
          />
          <input
            type="text"
            name="price"
            onChange={onChangeHandler}
            placeholder="price"
          />
          <input
            type="text"
            name="freeDilivery"
            onChange={onChangeHandler}
            placeholder="freeDilivery"
          />
          <input
            type="text"
            name="specialPrice"
            onChange={onChangeHandler}
            placeholder="specialPrice"
          />
          <input
            type="text"
            name="percentSale"
            onChange={onChangeHandler}
            placeholder="percentSale"
          />
          <input
            type="text"
            name="option"
            onChange={onChangeHandler}
            placeholder="option"
          />
        </CreateFormWrapIn>

        <SaveButtonContainer>
          <Button bgColor="#000" border="3px solid #fff" color="white">
            저장
          </Button>
          <Button
            bgColor="#fff"
            border="3px solid black"
            onClick={() => {
              navigate('/')
            }}
          >
            취소
          </Button>
        </SaveButtonContainer>
      </Forms>
    </CreateWrapper>
  )
}

const CreateWrapper = styled.div`
  width: 1200px;
  height: auto;
  margin: 150px auto;
  font-family: 'Pretendard-Black';
  font-weight: bold;
  display: flex;
  justify-content: center;
`
const ImgForm = styled.label`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
  border: 1px solid #ddd;
  cursor: pointer;
`
const Img = styled.img`
  width: 400px;
  height: 400px;
  text-align: center;
  height: auto;
  img[alt~='front'] {
    display: none;
  }
`
const ImgInput = styled.input`
  display: none;
`
const Forms = styled.form`
  align-items: center;
  gap: 50px;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const CreateFormWrapIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 400px;
`
const TitleForm = styled.div`
  margin: 20px 0px;
  p {
    margin-top: 10px;
    text-align: right;
  }
`
const InputBox = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #000;
  padding-left: 15px;
  height: 50px;
  font-size: 20px;
`
const SelectBox = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  border-bottom: 2px solid #000;
  margin: 20px 0px;
  padding-left: 10px;
  option {
    font-size: 14px;
    padding: 16px 18px;
    border: none;
    transition: background-color 0.2s ease-in;
    &:hover {
      background-color: #ddd;
    }
  }
`

const ContentForm = styled.div`
  border-top: 1px solid #e0e0e0;
  padding: 20px 0px;
  font-family: none;
  font-weight: initial;
  display: grid;
  grid-column-end: span 2;
  p {
    margin-top: 10px;
    text-align: right;
  }
`
const ContentTextarea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 2px solid #000;
  line-height: 18px;
  resize: none;
  &:focus {
    outline: none;
  }
`
const SaveButtonContainer = styled.div`
  display: flex;
  grid-column-end: span 2;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`
const Button = styled.button<{
  bgColor?: string
  color?: string
  border?: string
}>`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  padding: 1px 6px;
  font-weight: bold;
  border: ${(props) => (props.border ? props.border : null)};
  background-color: ${(props) => (props.bgColor ? props.bgColor : null)};
  color: ${({ color }) => (color ? color : '#000')};
  &:active {
    filter: brightness(50%);
  }
`

export default CreateForm
