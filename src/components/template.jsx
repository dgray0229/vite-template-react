import React, { useContext } from 'react'
import styled from "styled-components";
import PaginationContext from "../utils/paginationContext";
import { Image, SubTitle, Title } from "../layouts";
import Error from "./error";
import ProgressBar from "./progress-bar";

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
  }

`
const Arrow = styled.div`
  position: relative;
  font-size: 2rem;
  @media only screen and (min-width: 768px) {
    position: absolute;
    font-size: 4rem;
    cursor: pointer;
  }
`
const Prev = styled(Arrow)`
  left: 0;
`
const Next = styled(Arrow)`
  right: 0;
`
const Template = ({ children }) => {
  const {
    completed,
    pageData,
    error,
    errorMessage,
    prevStep,
    nextStep,
    getFormData,
    checkFormError
  } = useContext(PaginationContext)
  const handleNextPage = () => {
    if (completed === 100) return false
    const currentPageFormResults = getFormData()[pageData?.id];
    const isValid = checkFormError(currentPageFormResults);
    if (isValid) nextStep();
  }
  const handlePrevPage = (cb) => {
    if (completed === 100) return false
    const previousPageFormResults = getFormData()[pageData?.id - 1];
    const isValid = checkFormError(previousPageFormResults);
    if (isValid) prevStep();
  }
  return (
    <>
      <Image src="logotype.svg"/>
      {pageData?.title && <Title>{pageData?.title}</Title>}
      {pageData?.subtitle && <SubTitle>{pageData?.subtitle}</SubTitle>}
      {children}
      {error && <Error message={errorMessage}/>}
      <ProgressBar bgcolor="#E10098" completed={completed}/>
      <ArrowContainer>
        <Prev onClick={handlePrevPage}>&#8656;</Prev>
        <Next onClick={handleNextPage}>&#8658;</Next>
      </ArrowContainer>
    </>
  )
}

export default Template
