import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

type FormDataType = {
  email: string
  password: string
}

function Login() {
  const [formData, setFormData] = useState<FormDataType>({
    email: '',
    password: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const navigate = useNavigate()

  const HandleLogin = async () => {
    try {
      const { email, password } = formData
      const data = {
        email,
        password,
      }
      const response = await axios.post(`/api/login`, data)
      if (response.data.success) {
        alert('로그인 성공!!')
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Stdiv>
        <StH1 onClick={() => navigate('/')}>오늘의집</StH1>
        <StInputEmail>
          <StInput
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="이메일"
          ></StInput>
        </StInputEmail>
        <StInputPw>
          <StInput
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="비밀번호"
          ></StInput>
        </StInputPw>

        <StLoginButton onClick={HandleLogin}>로그인</StLoginButton>
      </Stdiv>
    </div>
  )
}

const Stdiv = styled.div`
  flex: 1 0 auto;
  margin: 0px auto;
  max-width: 300px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 0px;
`

const StInputEmail = styled.div`
  position: relative;
  display: block;
  width: 100%;
  border-radius: 4px 4px 0px 0px;
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
  z-index: 1;
`
const StInputPw = styled.div`
  position: relative;
  display: block;
  width: 100%;
  border-radius: 0px 0px 4px 4px;
  margin-top: -1px;
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
`
const StLoginButton = styled.button`
  margin: 0 auto;
  font-size: 15px;
  width: 100%;
  background-color: #35c5f0;
  color: white;
  border-radius: 3px;
  height: 50px;
  padding: 20px;
  margin: 20px auto;
`

const StH1 = styled.h1`
  line-height: 1;
  font-family: OhouseSans, Noto Sans KR, Apple SD Gothic Neo, 맑은 고딕,
    Malgun Gothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -0.4px;
  font-size: 30px;
  margin: 20px;
`

const StInput = styled.input`
  position: relative;
  display: block;
  width: 100%;
  border-radius: 4px 4px 0px 0px;
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
  z-index: 1;
`

export default Login
