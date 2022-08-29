import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Image, Input } from '../layouts'

const Checkbox = styled.div`
  position: relative;

  .card-body {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    max-width: 800px;
    border: 1px solid grey;
    margin: .325rem .5rem;
    padding: .325rem .5rem;
    text-align: center;
  }

  i {
    align-self: flex-end;
  }
`

const CardInput = styled(Input)`
  position: absolute;
  display: block;
  outline: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;
  width: 100%;
  height: 100%;

  &:checked {
    & ~ .card-body {
      border: 3px solid #232323;
    }
  }
`

const CardComponent = ({ id, label, addToList, removeFromList }) => {
  const [check, setCheck] = useState(false)
  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      addToList(value)
      setCheck(true)
    } else {
      removeFromList(value)
      setCheck(false);
    }
  }
  const checkmark = <>&#10004;</>
  const cross = <>&#10005;</>
  return (
    <Checkbox>
      <CardInput type="checkbox" value={id} onChange={handleChange}/>
      <div className="card-body">
        <i>{check ? checkmark : cross}</i>
        <Image src="https://via.placeholder.com/300.jpg"/>
        <p>{label}</p>
      </div>
    </Checkbox>
  )
}

export default CardComponent
