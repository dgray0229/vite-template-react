import React, { useContext, useState } from "react";
import PaginationContext from "../../utils/paginationContext";
import Slider from "../../components/range";
import { Continue, Label } from "../../layouts";

const FoodPortions = () => {
  const { nextStep, pageData, updateData } = useContext(PaginationContext);
  const [value, setValue] = useState("0")
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
  const handleButtonSubmit = () => {
    checkIfEmpty(value);
    submitData();
  }

  const handleSliderChange = ({target}) => {
    setValue(target.value);
  }

  return (
    <>
      <Label htmlFor='food-portions-slider'>Food Portions</Label>
      <Slider value={value} min="1" max="3" defaultValue={"2"} name="food-portions-slider" onChange={handleSliderChange} options={pageData.options} step={"1"} />
      <Continue name="food-portions-slider" type="button" value="Continue" onClick={handleButtonSubmit}/>
    </>
  );
};

export default FoodPortions;
