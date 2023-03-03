import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopNav from '../page/TopNav'
import { getUser } from '../util/localstorage'
import Home from '../page/Home'
import Join from '../page/Join'

const Router = () => {
  const userInfo = getUser()
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TopNav />}>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router
