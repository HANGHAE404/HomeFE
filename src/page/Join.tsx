import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate, Navigate } from 'react-router-dom'

function Join() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<{
    Id: string
    emailProvider: string
    password: string
    confirm: string
    nickname: string
  }>({
    Id: '',
    emailProvider: 'gmail.com',
    password: '',
    confirm: '',
    nickname: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }
  // console.log(handleSelectChange)
  const selectbox = () => {
    return (
      <StSelect
        name="emailProvider"
        value={formData.emailProvider}
        onChange={handleSelectChange}
      >
        <option value="gmail.com">gmail.com</option>
        <option value="naver.com">naver.com</option>
        <option value="kakao.com">kakao.com</option>
        <option value="outlook.com">outlook.com</option>
      </StSelect>
    )
  }

  const Navigate = useNavigate()

  const HandleJoin = async () => {
    try {
      const { Id, emailProvider, password, confirm, nickname } = formData
      const email = `${Id}@${emailProvider}`
      const data = {
        email,
        password,
        confirm,
        nickname,
      }
      console.log(data)
      const response = await axios
        .post(`http://15.165.18.86:3000/api/signup`, data)
        .then((res) => {
          console.log(res)
          alert('회원가입완료')
          navigate('/login')
        })
        .catch((error) => {
          console.log(error)
          alert('다시시도해주시기 바랍니다.')
        })
    } catch (error) {
      console.log(error)
    }
  }

  const validateEmail = (Id: string, emailProvider: string) => {
    const emailRegex = /^[a-z0-9]{4,10}$/
    return emailRegex.test(Id) && emailProvider !== ''
  }

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return passwordRegex.test(password)
  }

  const handleFormSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { Id, emailProvider, password } = formData
    if (!validateEmail(Id, emailProvider)) {
      alert('이메일 형식에 맞춰서 입력바랍니다.')
      return
    }
    if (!validatePassword(password)) {
      alert('비밀번호는 8자리 이상 영문, 숫자 조합입니다.')
      return
    }
    HandleJoin()
  }

  return (
    <Stdiv>
      <h1>회원가입</h1>
      <StInputEmail>
        <StP>이메일</StP>
        <StInput
          type="text"
          name="Id"
          value={formData.Id}
          onChange={handleInputChange}
        ></StInput>
        @{selectbox()}
      </StInputEmail>

      <StInputPw>
        <StH1>비밀번호</StH1>
        <StpOther>
          영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
        </StpOther>
        <StInput2
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        ></StInput2>
      </StInputPw>

      <StConfirmPw>
        <h1>비밀번호 확인</h1>
        <StInput2
          type="password"
          name="confirm"
          value={formData.confirm}
          onChange={handleInputChange}
        ></StInput2>
      </StConfirmPw>
      <StInputNickname>
        <StH1>닉네임</StH1>
        <StpOther>다른 유저와 겹치지 않도록 입력해주세요.</StpOther>
        <StInput2
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleInputChange}
        ></StInput2>
      </StInputNickname>
      <br></br>
      <StJoinButton onClick={HandleJoin}>회원가입하기</StJoinButton>
      <h2>이미 아이디가 있으신가요?</h2>
      <button onClick={() => Navigate('/Login')}>로그인</button>
    </Stdiv>
  )
}

const Stdiv = styled.div`
  margin: 0px 479px;
  padding: 60px 0px;
  display: block;
  width: 360px;
  height: 1300px;
  font-size: 15px;
`

const StInputEmail = styled.div`
  align-items: center;
  font-size: 15px;
`
const StInputPw = styled.div`
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: rgb(47, 52, 56);
  letter-spacing: -0.3px;
  word-break: keep-all;
`
const StConfirmPw = styled.div`
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: rgb(47, 52, 56);
  letter-spacing: -0.3px;
  word-break: keep-all;
`
const StInputNickname = styled.div`
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: rgb(47, 52, 56);
  letter-spacing: -0.3px;
  word-break: keep-all;
`

const StJoinButton = styled.button`
  margin: 0 auto;
  font-size: 15px;
  width: 100%;
  background-color: #35c5f0;
  color: white;
  border-radius: 3px;
  height: 50px;
`
const StSelect = styled.select`
  width: 43%;
  font-size: 15px;
`
const StP = styled.p`
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: rgb(255, 119, 119);
  letter-spacing: -0.3px;
  word-break: keep-all;
`

const StH1 = styled.h1`
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: rgb(47, 52, 56);
  letter-spacing: -0.3px;
  word-break: keep-all;
  padding: 10px 0 0;
`

const StpOther = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
  color: rgb(130, 140, 148);
  letter-spacing: -0.3px;
`

const StInput = styled.input`
  width: 50%;
`

const StInput2 = styled.input`
  width: 360px;
`

export default Join
