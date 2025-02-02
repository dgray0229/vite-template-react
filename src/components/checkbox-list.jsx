import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import CardComponent from './checkbox'
import { Continue } from "../layouts";
import PaginationContext from "../utils/paginationContext";

const CardContainer = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`

const CheckboxList = () => {
  const { updateData, pageData, nextStep, checkFormError, getFormData } = useContext(PaginationContext);
  const currentPageFormResults = getFormData()[pageData?.id];
  const initialState = currentPageFormResults || []

  const [selections, setSelections] = useState(initialState);
  const addToList = (item) => {
    setSelections(prevArray => [...prevArray, item]
    )
  }
  const removeFromList = (item) => {
    setSelections(prevArray => [...prevArray].filter(checkedValue => checkedValue !== item)
    )
  }
  const cardMap = pageData?.options.map(({ id, label }) => (
    <CardComponent key={id} id={id} label={label} addToList={addToList} removeFromList={removeFromList}/>
  ));
  const submitData = () => {
    updateData({ [pageData.id]: selections });
    nextStep();
  }
  const handleButtonSubmit = () => {
    const isValid = checkFormError(selections, "Please make a selection");
    if (!isValid) { return  false }
    submitData();
  }

  return (
    <>
      <CardContainer>
        {cardMap}
      </CardContainer>
      <Continue type="button" value="Continue" onClick={handleButtonSubmit}/>
    </>
  )
}

export default CheckboxList
