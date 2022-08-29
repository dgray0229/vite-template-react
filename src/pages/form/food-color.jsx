import React, { useState } from 'react'
import InputName from '../../components/text-input'

const FoodColor =
  ({ getData }) => {
    const [count, setCount] = useState(0)

    return (
    <div className="App">
      <header className="App-header"></header>
      <h1>Let's get started, first, what's your name?</h1>
      <InputName getData={getData}/>
    </div>
    )
  }

export default FoodColor
