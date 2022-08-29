import React, { useContext, useState } from 'react'
import PaginationContext from "../../utils/paginationContext";
import { Continue, Label } from "../../layouts";
import Slider from "../../components/range";

const RangeGroup =
  () => {
    const { nextStep, pageData, updateData } = useContext(PaginationContext);
    const [fruitValue, setFruitValue] = useState("0")
    const [vegValue, setVegValue] = useState("0");
    const checkIfEmpty = (value) => {
      if (!value) {
        alert("Please make a selection");
        return false;
      }
    }
    const submitData = () => {
      updateData({ [pageData.id]: value });
      setTimeout(nextStep, 2000)
    }
    const handleButtonSubmit = (submitValue) => {
      checkIfEmpty(submitValue);
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
        {pageData.options.map((sliderOptions, index) => {
          return (
            <>
              <Label htmlFor='food-color-slider'>{label}</Label>
              <Slider value={valueArray[index]} min="1" max="3" name="food-color-slider" onChange={setValueArray[index]}
                      options={sliderOptions} step={"1"}/>
            </>
          )
        })}
        <Continue name="food-portions-slider" type="button" value="Continue" onClick={handleButtonSubmit}/>
      </>
    );
  }

export default RangeGroup
