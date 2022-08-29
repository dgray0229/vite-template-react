import React, { useContext } from 'react'
import PaginationContext from "../utils/paginationContext";
import { Image, SubTitle, Title } from "../layouts";
import Error from "./error";
import ProgressBar from "./progress-bar";

const Template = ({ children }) => {
  const { completed, pageData, error, errorMessage } = useContext(PaginationContext)
  return (
    <>
      <Image src="logotype.svg"/>
      {pageData?.title && <Title>{pageData?.title}</Title>}
      {pageData?.subtitle && <SubTitle>{pageData?.subtitle}</SubTitle>}
      {children}
      {error && <Error message={errorMessage}/>}
      <ProgressBar bgcolor="#E10098" completed={completed}/>
    </>
  )
}

export default Template
