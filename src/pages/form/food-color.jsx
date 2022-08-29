import React, { useContext, useState } from 'react'
import PaginationContext from "../../utils/paginationContext";
import { Continue, Label } from "../../layouts";
import Slider from "../../components/range";

const FoodColor =
  () => {
    const { nextStep, pageData, updateData, checkFormError } = useContext(PaginationContext);
    const [fruitValue, setFruitValue] = useState("0")
    const [vegValue, setVegValue] = useState("0");
    const submitData = () => {
      updateData({ [pageData.id]: [fruitValue, vegValue] });
      setTimeout(nextStep, 2000)
    }
    const handleButtonSubmit = (submitValue) => {
      const isValid = checkFormError(submitValue, "Please make a selection");
      if (!isValid) { return false }
      submitData();
    }

    const handleFruitSliderChange = ({ target }) => {
      setFruitValue(target.value);
    }
    const handleVegSliderChange = ({ target }) => {
      setVegValue(target.value);
    }
    const valueArray = [fruitValue, vegValue];
    const setValueArray = [handleFruitSliderChange, handleVegSliderChange];
    return (
      <>
        {pageData.options.map(({ options }, index) => {
          return (
            <div key={index}>
              <Label htmlFor='food-color-slider'>Food Color</Label>
              <Slider value={valueArray[index]} min="1" max="3" name="food-color-slider" onChange={setValueArray[index]}
                      options={options} step={"1"}/>
            </div>
          )
        })}
        <Continue name="food-portions-slider" type="button" value="Continue" onClick={handleButtonSubmit}/>
      </>
    );
  }

export default FoodColor
