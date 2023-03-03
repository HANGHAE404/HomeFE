import React from 'react'
import styled from 'styled-components'

function Icon({ Text }: any) {
  return <IconEl>{Text}</IconEl>
}
const IconEl = styled.div`
  font-size: 12px;
  line-height: 16px;
  position: absolute;
  right: -10px;
  top: -6px;
  padding: 3px 8px;
  border-radius: 20px;
  font-weight: 700;
  background-color: rgb(255, 119, 119);
  color: rgb(255, 255, 255);
`
export default Icon
