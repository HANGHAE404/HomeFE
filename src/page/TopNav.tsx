import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { getUser, removeUser } from '../util/localstorage'
import '../index.css'
import { Link } from 'react-router-dom'
import Logo from '../asset/Logo'
import SearchBox from '../asset/SearchBox'
import Cart from '../asset/Cart'
import NewIcon from '../asset/NewIcon'
const TopNav = ({ children, user }: any) => {
  const userInfo = getUser()

  const navigate = useNavigate()
  const logoutHandler = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      removeUser()
      window.location.reload()
      alert('로그아웃완료')
      navigate('/')
    }
    return
  }

  return (
    <div>
      <Nav>
        {userInfo ? (
          <InNavWrap>
            <div>
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <InNav>
              <B>Hello ! {userInfo.sub}</B> 😃
              <Button onClick={logoutHandler}>Logout</Button>
            </InNav>
          </InNavWrap>
        ) : (
          <>
            <InNavWrap>
              <div>
                <Link to="/">
                  <Logo />
                </Link>
              </div>
              <MenuUl>
                <li>커뮤니티</li>
                <li>쇼핑</li>
                <li>이사/시공/수리</li>
              </MenuUl>
              <div style={{ position: 'relative' }}>
                <BoxWapperAbs>
                  <SearchBox />
                </BoxWapperAbs>
                <Input type="text" placeholder="쇼핑검색" />
              </div>
              <div>
                <BoxWapper>
                  <Cart />
                </BoxWapper>
              </div>
              <InNav>
                <Button onClick={() => navigate('/Login')}>로그인</Button>
                <Button onClick={() => navigate('/join')}>회원가입</Button>
                <Button onClick={() => navigate('/')}>글쓰기</Button>
              </InNav>
            </InNavWrap>
            <Ulwrappdiv>
              <Ulwrapp>
                <li>쇼핑홈</li>
                <li>카테고리</li>
                <li>베스트</li>
                <li>오늘의딜</li>
                <li>
                  오!굿즈
                  <NewIcon />
                </li>
                <li>
                  빠른배송
                  <NewIcon />
                </li>
                <li>오!쇼룸</li>
                <li>프리미엄</li>
                <li>기획전</li>
              </Ulwrapp>
            </Ulwrappdiv>
          </>
        )}
      </Nav>
      {children || <Outlet />}
    </div>
  )
}
const Nav = styled.div`
  background-color: white;
  /* padding: 0px 60px; */

  font-family: 'LINESeedKR-Bd';
  filter: drop-shadow(2px 4px 6px black);
`
const MenuUl = styled.ul`
  display: flex;
  gap: 50px;
`
const BoxWapper = styled.div`
  width: 20px;
`
const BoxWapperAbs = styled(BoxWapper)`
  position: absolute;
  left: 5px;
  top: 9px;
`

const InNavWrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 80px;
  padding: 10px 60px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Button = styled.button`
  color: black;
`
const Ulwrappdiv = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 60px;
  border-top: 1px solid #eaedef;
  border-bottom: 1px solid #eaedef;
`
const Ulwrapp = styled.ul`
  display: flex;
  gap: 30px;
  height: 50px;
  align-items: center;
`
const InNav = styled.div`
  font-family: 'KCC-DodamdodamR';
  display: flex;
  align-items: center;
  gap: 10px;
`
const B = styled.b`
  font-weight: bold;
`
const Input = styled.input`
  width: 200px;
  height: 40px;
  padding-left: 40px;
`
export default TopNav
