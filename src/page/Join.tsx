import React from 'react'
import { useState } from 'react'
import { text } from 'stream/consumers'
import styled from 'styled-components'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function Join() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [nickname, setNickname] = useState('')

  const selectbox = () => {
    return (
      <select>
        <option key="gmail" value="gmail">
          gmail.com
        </option>
        <option key="naver" value="naver">
          naver.com
        </option>
        <option key="kakao" value="kakao">
          kakao.com
        </option>
        <option key="outlook" value="outlook">
          outlook.com
        </option>
      </select>
    )
  }

  const HandleJoin = async () => {
    try {
      const data = {
        email: id,
        password: pw,
        confirm: pw,
        nickname: nickname,
      }
      // await axios.post(`${}/api/signup`)
      alert('회원가입 성공!')
      // Navigate('/');
    } catch {}
  }

  return (
    <Stdiv>
      <h1>회원가입</h1>
      <StInputEmail>
        <p>이메일</p>
        <input type="text"></input>@{selectbox()}
      </StInputEmail>

      <StInputPw>
        <h1>비밀번호</h1>
        <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
        <input type="text"></input>
      </StInputPw>
      <StConfirmPw>
        <h1>비밀번호 확인</h1>
        <input type="text"></input>
      </StConfirmPw>
      <StInputNickname>
        <h1>닉네임</h1>
        <p>다른 유져와 겹치지 않도록 입력해주세요.</p>
        <input type="text"></input>
      </StInputNickname>
      <br></br>
      <StJoinButton>회원가입하기</StJoinButton>
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
