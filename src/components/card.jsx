import React, { useState } from 'react'
import styled from 'styled-components'
import { Image, Input } from '../layouts'

const Card = styled.div`
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
      border: 3px solid black;
    }
  }
`

const CardComponent = ({ label }) => {
  const [selections, setSelections] = useState([])
  return (
    <Card>
      <CardInput type="checkbox"/>
      <div className="card-body">
        <i>+</i>
        <Image src="https://via.placeholder.com/300.jpg"/>
        <p>{label}</p>
      </div>
    </Card>
  )
}

export default CardComponent
