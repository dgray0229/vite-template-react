import React, { useState } from 'react'
import styled from 'styled-components'
import { Image, Input } from '../layouts'

const Label = styled.label`
  visibility: hidden;
`
const NameInput = styled(Input)`
  display: flex;
  justify-content: center
`
const Continue = styled(Input)`
  &[type=button] {
    background-color: pink;
    color: white;
    display: block;
    font-size: 1.5rem;
    padding: .5rem 1rem;
    text-transform: uppercase;
  }
`
const InputName = ({ updateData, pageData, success }) => {
  const [value, setValue] = useState('')
  const successLabel = pageData?.success?.label ? pageData?.success?.label.replace(/{{name}}/, value) : pageData?.success?.label
  const buttonValue = success ? successLabel : 'Continue'
  const handleTextInputChange = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit = (event) => {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      console.log('Enter key was pressed. Run your function.')
      event.preventDefault()
      updateData({ [pageData.id]: value })
    }
  }
  return (<>
    <Label for="name" id="label-name">Name</Label>
    <Image src="https://via.placeholder.com/300.jpg"/>
    <NameInput
      type="text"
      id="name"
      value={value}
      onChange={handleTextInputChange}
      onKeyPress={handleSubmit}
    />
    <Continue type="button" value={buttonValue} onClick={() => updateData({ [pageData.id]: value })}/>
  </>)
}

export default InputName
