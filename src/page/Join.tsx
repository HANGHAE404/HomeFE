import React from 'react'
import { useState } from 'react'
import { text } from 'stream/consumers'
import styled from 'styled-components'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function Join() {
  const [state, setState] = useState({
    id: '',
    pw: '',
    nickname: '',
  })
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
      </select>
    )
  }

  const HandleJoin = async () => {
    try {
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
      <StjoinButton>회원가입하기</StjoinButton>
    </Stdiv>
  )
}

const Stdiv = styled.div`
  margin: 50px;
  padding: 20px;
  align-items: center;
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

const StjoinButton = styled.button``

export default Join
