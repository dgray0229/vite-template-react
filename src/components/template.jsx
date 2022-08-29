import React, { useContext } from 'react'
import styled from 'styled-components'
import PaginationContext from "../utils/paginationContext";
import { Image } from "../layouts";
import Error from "./error";

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`
const SubTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`
const Template = ({ children }) => {
const { pageData, error, errorMessage } = useContext(PaginationContext)
  return (
    <>
      <Image src="logotype.svg"  />
      {pageData?.title && <Title>{pageData?.title}</Title>}
      {pageData?.subtitle && <SubTitle>{pageData?.subtitle}</SubTitle>}
      {children}
      {error && <Error message={errorMessage} />}
    </>
  )
}

export default Template
