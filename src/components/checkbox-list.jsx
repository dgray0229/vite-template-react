import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import CardComponent from './checkbox'
import { Continue } from "../layouts";
import PaginationContext from "../utils/paginationContext";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`

const CheckboxList = () => {
  const [selections, setSelections] = useState([]);
  const { updateData, pageData, nextStep } = useContext(PaginationContext);
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
  const checkIfEmpty = (value) => {
    if (!value) {
      alert("Please make a selection");
      return false;
    }
  }
  const submitData = () => {
    updateData({ [pageData.id]: selections });
    nextStep();
  }
  const handleButtonSubmit = () => {
    checkIfEmpty(selections);
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
