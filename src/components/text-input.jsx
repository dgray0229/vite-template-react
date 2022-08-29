import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Continue, Image, Input, Label } from '../layouts'
import PaginationContext from "../utils/paginationContext";

const NameInput = styled(Input)`
  display: flex;
  justify-content: center
`
const InputName = ({ setSuccess, success }) => {
  const { pageData, updateData, nextStep, checkFormError, getFormData } = useContext(PaginationContext);
  const currentPageFormResults = getFormData()[pageData?.id];

  const initialState = currentPageFormResults || '';
  const [formValue, setFormValue] = useState(initialState)
  const successLabel = pageData?.success?.label ? pageData?.success?.label.replace(/{{name}}/, formValue) : pageData?.success?.label
  const buttonValue = success ? successLabel : 'Continue'
  const submitData = () => {
    updateData({ [pageData.id]: formValue });
    setSuccess(true);
    setTimeout(nextStep, 2000)
  }
  const handleTextInputChange = ({ target }) => {
    setFormValue(target.value)
  }
  const handleKeyboardSubmit = ({ code, target }) => {
    if (code === 'Enter' || code === 'NumpadEnter') {
      const isValid = checkFormError(target.value, 'Name must be filled out');
      if (!isValid) { return false }
      submitData();
    }
  }
  const handleButtonSubmit = () => {
    const isValid = checkFormError(formValue, 'Name must be filled out');
    if (!isValid) { return false }
    submitData();
  }
  return (<>
    <Label htmlFor="name" id="label-name">Name</Label>
    <Image src="placeholder.png" alt="placeholder image"/>
    <NameInput
      type="text"
      id="name"
      value={formValue}
      onChange={handleTextInputChange}
      onKeyPress={handleKeyboardSubmit}
      required
    />
    <Continue type="button" value={buttonValue} onClick={handleButtonSubmit}/>
  </>)
}

export default InputName
