import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`
const SubTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`

const Template = ({ pageData, children }) => {
  return (
    <>
      {pageData?.title && <Title>{pageData?.title}</Title>}
      {pageData?.subtitle && <SubTitle>{pageData?.subtitle}</SubTitle>}
      {children}
    </>
  )
}

export default Template
