import React, { useContext, useState } from "react";
import PaginationContext from "../../utils/paginationContext";
import Slider from "../../components/range";
import { Continue, Label } from "../../layouts";

const FoodPortions = () => {
  const { nextStep, pageData, updateData, checkFormError } = useContext(PaginationContext);
  const [value, setValue] = useState("0")
  const submitData = () => {
    updateData({ [pageData.id]: value });
    setTimeout(nextStep, 2000)
  }
  const handleButtonSubmit = () => {
    const isValid = checkFormError(value, "Please make a selection");
    if (!isValid) { return false }
    submitData();
  }

  const handleSliderChange = ({target}) => {
    setValue(target.value);
  }

  return (
    <>
      <Label htmlFor='food-portions-slider'>Food Portions</Label>
      <Slider value={value} min="1" max="3" name="food-portions-slider" onChange={handleSliderChange} options={pageData.options} step={"1"} />
      <Continue name="food-portions-slider" type="button" value="Continue" onClick={handleButtonSubmit}/>
    </>
  );
};

export default FoodPortions;
