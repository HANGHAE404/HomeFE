import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <div>
      <Stdiv>
        <h1>오늘의집</h1>
        <StInputEmail>
          <p>이메일</p>
          <input type="text"></input>
        </StInputEmail>
        <StInputPw>
          <h1>비밀번호</h1>
          <input type="text"></input>
        </StInputPw>

        <StLoginButton>회원가입하기</StLoginButton>
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
