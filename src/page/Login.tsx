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
        <h1>오늘의집</h1>
        <StInputEmail>
          <p>이메일</p>
          <input
            type="text"
            name="email"
            value="{formData.email}"
            onChange={handleInputChange}
          ></input>
        </StInputEmail>
        <StInputPw>
          <h1>비밀번호</h1>
          <input
            type="text"
            name="password"
            value="{formData.password}"
            onChange={handleInputChange}
          ></input>
        </StInputPw>

        <StLoginButton onClick={HandleLogin}>회원가입하기</StLoginButton>
      </Stdiv>
    </div>
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
const StLoginButton = styled.button`
  margin: 0 auto;
`

export default Login
