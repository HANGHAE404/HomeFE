import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopNav from '../page/TopNav'
import { getUser } from '../util/localstorage'
import Home from '../page/Home'
import Join from '../page/Join'
import Login from '../page/Login'
import DetailPage from '../page/DetailPage'
import Category from '../page/Category'
import Best from '../page/Best'
import Todaydeal from '../page/Todaydeal'
import Cart from '../page/Cart'

const Router = () => {
  const userInfo = getUser()
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TopNav />}>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/DetailPage/:id" element={<DetailPage />} />
          {/* 아래는 후순위 스코프초과  */}
          <Route path="/category" element={<Category />} />
          <Route path="/best" element={<Best />} />
          <Route path="/todaydeal" element={<Todaydeal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router
