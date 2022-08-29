import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Continue, Image, Input, Label } from '../layouts'
import PaginationContext from "../utils/paginationContext";

const NameInput = styled(Input)`
  display: flex;
  justify-content: center
`
const InputName = ({ setSuccess, success }) => {
  const { pageData, updateData, nextStep } = useContext(PaginationContext);
  const [formValue, setFormValue] = useState('')
  const successLabel = pageData?.success?.label ? pageData?.success?.label.replace(/{{name}}/, formValue) : pageData?.success?.label
  const buttonValue = success ? successLabel : 'Continue'
  const checkIfEmpty = (formData) => {
    if (!formData) {
      alert('Name must be filled out');
      return false;
    }
  }
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
      checkIfEmpty(target.value);
      console.log('Enter key was pressed. Run your function.')
      submitData();
    }
  }
  const handleButtonSubmit = () => {
    checkIfEmpty(formValue);
    submitData();
  }
  return (<>
    <Label htmlFor="name" id="label-name">Name</Label>
    <Image src="https://via.placeholder.com/300.jpg"/>
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
