import React, { useState } from 'react'
import Carousel from 'nuka-carousel/lib/carousel'
import styled from 'styled-components'
import { debounce } from 'lodash'
function CarouselComp() {
  const Data = [
    {
      id: 1,
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167774856675959472.png?w=1920',
    },
    {
      id: 2,
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167757511179720592.png?w=2560 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167757511179720592.png?w=2560 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167757511179720592.png?w=2560 3x',
    },
    {
      id: 3,
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167757535963004049.png?w=2560 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167757535963004049.png?w=2560 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167757535963004049.png?w=2560 3x',
    },
    {
      id: 4,
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167757535963004049.png?w=2560 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167757535963004049.png?w=2560 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167757535963004049.png?w=2560 3x',
    },
    {
      id: 5,
      src: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167757531484370577.png?w=2560 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167757531484370577.png?w=2560 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167757531484370577.png?w=2560 3x',
    },
  ]
  const [isIndex, setIndex] = useState(0)
  return (
    <Wrapper>
      <Carousel
        // slideIndex={isIndex}
        afterSlide={(index: number) => setIndex(index)}
        beforeSlide={(index: number) => setIndex(index)}
        renderCenterLeftControls={({ previousSlide }) => (
          <SlideButton
            onClick={() => {
              previousSlide()
            }}
            style={{
              width: '48px',
              height: '48px',
              display: 'block',
              background: '#000',
              borderRadius: '50px',
            }}
          >
            {/* <i className="fa fa-arrow-left" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              style={{ color: 'white', width: '32px' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </SlideButton>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <SlideButton
            onClick={() => {
              nextSlide()
            }}
            style={{
              width: '48px',
              height: '48px',
              display: 'block',
              background: '#000',
              borderRadius: '50px',
            }}
          >
            {/* <i className="fa fa-arrow-right" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              style={{ color: 'white', width: '32px' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                style={{ color: 'white' }}
              />
            </svg>
          </SlideButton>
        )}
        autoplay={true}
        autoplayInterval={2000}
        wrapAround={true}
      >
        {Data.map((pd: { id: number; src: string }) => (
          <div key={pd.id}>
            <img
              src={pd.src}
              alt={`${pd.id}`}
              style={{ width: '100%', objectFit: 'cover', height: '380px' }}
            />
          </div>
        ))}
      </Carousel>
      <PageNum>
        {isIndex + 1}/{Data.length}
      </PageNum>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
`
export const SlideButton = styled.button`
  opacity: 0;
  ${Wrapper}:hover & {
    background-color: #000;
    opacity: 0.8;
  }
`
const PageNum = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 60px;
  height: 30px;
  background-color: #000;
  opacity: 0.5;
  color: white;
  right: 250px;
  bottom: 30px;
  border-radius: 10px;
  font-weight: bold;
`
export default CarouselComp
