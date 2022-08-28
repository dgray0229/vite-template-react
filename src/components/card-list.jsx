import React, { useState } from 'react'
import styled from 'styled-components'
import CardComponent from './card'

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const CardList = ({ updateData, pageData }) => {
  const [value, setValue] = useState([])
  console.log(pageData)
  const cardMap = pageData?.options.map(({ id, label }) => (
    <CardComponent key={id} label={label}/>
  ))
  return (
    <>
      <CardContainer>
        {cardMap}
      </CardContainer>
    </>
  )
}

export default CardList
