import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { useNavigate, Navigate } from 'react-router-dom'




function Join() {
  const [formData, setFormData] = useState<{
    email: string
    password: string
    confirm: string
    nickname: string
  }>({
    email: '',
    password: '',
    confirm: '',
    nickname: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const selectbox = () => {
    return (
      <select>
        <option value="gmail">gmail.com</option>
        <option value="naver">naver.com</option>
        <option value="kakao">kakao.com</option>
        <option value="outlook">outlook.com</option>
      </select>
    )
  }

  const Navigate = useNavigate()

  const HandleJoin = async () => {
    try {

      const { email, password, confirm, nickname } = formData
      const data = {
        email,
        password,
        confirm,
        nickname,
      }
      console.log(data)
      const mock = new MockAdapter(axios)
      mock.onPost('api/signup').reply(200, {
        data: {
          success: true,
        },
      })

      const response = await axios.post(`/api/signup`, data)
      if (response.data.success) {
        alert('회원가입 성공!')
        Navigate('/')
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <Stdiv>
      <h1>회원가입</h1>
      <StInputEmail>
        <p>이메일</p>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        ></input>
        @{selectbox()}
      </StInputEmail>

      <StInputPw>
        <h1>비밀번호</h1>
        <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        ></input>
      </StInputPw>
      <StConfirmPw>
        <h1>비밀번호 확인</h1>
        <input
          type="text"
          name="confirm"
          value={formData.confirm}
          onChange={handleInputChange}
        ></input>
      </StConfirmPw>
      <StInputNickname>
        <h1>닉네임</h1>
        <p>다른 유저와 겹치지 않도록 입력해주세요.</p>
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleInputChange}
        ></input>
      </StInputNickname>
      <br></br>
      <StJoinButton onClick={HandleJoin}>회원가입하기</StJoinButton>
    </Stdiv>
  )
}

const Stdiv = styled.div`
  margin: 0px auto;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
  width: 650px;
`

const StInputEmail = styled.div`
  margin: 30px;
  padding: 10px;
  align-items: center;
`
const StInputPw = styled.div`
  margin: 30px;
  padding: 10px;
  align-items: center;
`
const StConfirmPw = styled.div`
  margin: 30px;
  padding: 10px;
  align-items: center;
`
const StInputNickname = styled.div`
  margin: 30px;
  padding: 10px;
  align-items: center;
`

const StJoinButton = styled.button`
  margin: 0 auto;
`

export default Join
