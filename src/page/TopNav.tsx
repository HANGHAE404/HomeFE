import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { getUser, removeUser } from '../util/localstorage'
import '../index.css'
import { Link } from 'react-router-dom'
import Logo from '../asset/Logo'
import SearchBox from '../asset/SearchBox'
import Cart from '../asset/Cart'
import NewIcon from '../asset/NewIcon'
import Ranking from '../components/Ranking'
import Rankingtwo from '../components/Rankingtwo'

const TopNav = ({ children, user }: any) => {
  const userInfo = getUser()
  const { pathname } = useLocation()
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
                <Item selected={pathname === '/'}>
                  <Link to="/">쇼핑홈</Link>
                </Item>
                <Item selected={pathname === '/category'}>
                  <Link to="/category">카테고리</Link>
                </Item>
                <Item selected={pathname === '/best'}>
                  <Link to="/best">베스트</Link>
                </Item>
                <Item selected={pathname === '/todaydeal'}>
                  <Link to="/todaydeal">오늘의딜</Link>
                </Item>
                <Item selected={pathname === '/ohgoods'}>
                  오!굿즈
                  <NewIcon />
                </Item>
                <Item>
                  빠른배송
                  <NewIcon />
                </Item>
                <Item>오!쇼룸</Item>
                <Item>프리미엄</Item>
                <Item>기획전</Item>
              </Ulwrapp>
              <span style={{ width: '200px' }}>
                <Rankingtwo />
              </span>
              {/* <Ranking /> */}
            </Ulwrappdiv>
          </>
        )}
      </Nav>
      {children || <Outlet />}
    </div>
  )
}
const Item = styled.li<{
  selected?: boolean
}>`
  padding: 12px 6px;
  height: 50px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.selected ? '#35C5F0' : null)};
  font-weight: ${(props) => (props.selected ? 'bold' : null)};
  border-bottom: ${(props) => (props.selected ? '2px solid #35C5F0' : null)};
`

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  margin: 0 auto;
  padding: 0 60px;
  border-top: 1px solid #eaedef;
  border-bottom: 1px solid #eaedef;
  @media screen and (max-width: 900px) {
    display: none;
  }
`
const Ulwrapp = styled.ul`
  display: flex;
  gap: 30px;
  height: 50px;
  align-items: center;
  > li {
    &:focus {
      border-bottom: 1px solid red;
    }
  }
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
