import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
const data = [
  { rank: 1, text: '베게' },
  { rank: 2, text: '솜이불' },
  { rank: 3, text: '클라이너소파' },
  { rank: 4, text: '노트북방석' },
]
function Rankingtwo() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
  }

  return (
    <CarouselWrap className="carousel">
      <Slider {...settings}>
        {data.map((el) => (
          <div>
            <span style={{ fontWeight: 'bold' }}>{el.rank}</span>.&nbsp;
            {el.text}
          </div>
        ))}
      </Slider>
    </CarouselWrap>
  )
}
const CarouselWrap = styled.div`
  width: auto;
`

export default Rankingtwo
