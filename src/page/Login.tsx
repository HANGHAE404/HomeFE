import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { setCookie } from '../util/cookie'
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
      console.log('data : ', data)
      const response = await axios
        .post(`http://15.165.18.86:3000/api/login`, data)
        .then((res) => {
          console.log(res)
          let token = res.data.token
          setCookie('accessToken', token) // 쿠키에저장
          const decodedUserInfo = jwt_decode(token)
          console.log('decode', decodedUserInfo)
          localStorage.setItem('userInfo', JSON.stringify(decodedUserInfo))
          alert('로그인완료')
          navigate('/')
        })
        .catch((error) => {
          console.log(error)
          alert('다시시도해주시기 바랍니다.')
        })
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
            value={formData.email}
            onChange={handleInputChange}
          ></input>
        </StInputEmail>
        <StInputPw>
          <h1>비밀번호</h1>
          <input
            type="password"
            name="password"
            value={formData.password}
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
