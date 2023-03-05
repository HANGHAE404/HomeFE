import { useEffect, useState } from 'react'

// API로 가져오는 데이터
const dummy_data = [
  { rank: 1, text: '블랙엔데커' },
  { rank: 2, text: '혼술안주' },
  { rank: 3, text: '여성 티셔츠' },
  { rank: 4, text: '핏플랍' },
  { rank: 5, text: '남성자켓' },
  { rank: 6, text: '가히' },
  { rank: 7, text: '스카치테이프' },
  { rank: 8, text: '프라다' },
  { rank: 9, text: '바비브라운 섀도우' },
  { rank: 10, text: '쿨피스' },
  { rank: 11, text: '아이러브제이' },
  { rank: 12, text: '내셔널지오그래픽 키즈' },
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
      setPointer((pointer) => pointer + 1)
    }, 1000)

    if (pointer === words_len) setPointer(0)
  }

  useEffect(() => {
    increasePointer()

    return () => clearInterval(timer)
  }, [pointer])

  return (
    <div id="container">
      <div id="real-time-search-word">{words[pointer]}</div>
    </div>
  )
}

export default Ranking
