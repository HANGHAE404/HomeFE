import React from 'react'
import styled from 'styled-components'
import Icon from '../asset/Icon'
interface IData {
  id: number
  src: string
  iconText: string
  wordText: string
}
interface IDataArray {
  cateGoryData: IData[]
}
const MenuCategorys = ({ cateGoryData }: IDataArray): React.ReactElement => {
  return (
    <MenuCategory>
      <IconUl>
        {cateGoryData &&
          cateGoryData?.map((el: any) => (
            <>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}
              >
                <IconLi key={el.id}>
                  <Img src={el.src} alt={el.id} />
                  {el.iconText !== '' ? <Icon Text={el.iconText}></Icon> : null}
                </IconLi>
                <IconText>{el.wordText}</IconText>
              </div>
            </>
          ))}
      </IconUl>
    </MenuCategory>
  )
}
const MenuCategory = styled.div`
  max-width: 1280px;
  padding: 0px 60px;
  margin: 0 auto;
`
const IconUl = styled.div`
  height: 180px;
  display: flex;
  align-items: center;
`
const IconLi = styled.div`
  position: relative;

  width: 3.5rem;
  height: 3.5rem;
  margin: 0px 25px;
`
const Img = styled.img`
  width: 100%;
  border-radius: 30%;
`
const IconText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #2f3438;
  margin-top: 8px;
`
export default MenuCategorys
