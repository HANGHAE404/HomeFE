import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

// API로 가져오는 데이터
const dummy_data = [
  { rank: 1, text: '블랙엔데커' },
  { rank: 2, text: '혼술안주' },
  { rank: 3, text: '여성 티셔츠' },
  { rank: 4, text: '핏플랍' },
]

// rank 순서대로 text값만 가진 배열 생성
let words = []
dummy_data.map((value) => {
  words.push(value.text)
})
// 출력할 검색어 수
const words_len = words.length

function Ranking() {
  let timer
  const [pointer, setPointer] = useState(0)

  const increasePointer = () => {
    timer = setInterval(() => {
      //매 '시간'마다 '함수'를 실행시킨다
      setPointer((pointer) => pointer + 1)
      // document.getElementById(
      //   'real-time-search-word'
      // ).style.transform = `translateY(${-20}px)`
    }, 4300)

    if (pointer === words_len) setPointer(0)
  }

  useEffect(() => {
    increasePointer()
    // unMount시 interval을 없애준다
    return () => clearInterval(timer)
  }, [pointer])

  return (
    <Container>
      <AniDiv id="real-time-search-word">{words[pointer]}</AniDiv>
      <AniDiv2 id="real-time-search-word">{words[pointer - 1]}</AniDiv2>
    </Container>
  )
}
const Container = styled.div`
  overflow: hidden;
`
const DownAnimation = keyframes`
  from {
transform: translateY(0px)
  }to{
    transform: translateY(50px)
  }
`
const DownAnimation2 = keyframes`
  from {
transform: translateY(-50px)
  }to{
    transform: translateY(0px)
  }
`
const AniDiv = styled.div`
  animation-duration: 3s;
  animation-name: ${DownAnimation};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`
const AniDiv2 = styled.div`
  animation-duration: 3s;
  animation-name: ${DownAnimation2};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`
export default Ranking
