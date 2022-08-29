import React from 'react';
import styled from "styled-components";
import { Image } from "../layouts";

const Fieldset = styled.fieldset`
  border: none;
`
const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    margin: 2rem 0;
    max-width: 150px;
  }
`
const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const ValueSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #E10098;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #E10098;
    cursor: pointer;
  }
`
const SVG = styled.svg`
  position: relative;
  width: 100%;
`
const Rect = styled.rect`
  padding: .0625rem;
  margin: 0 10px;
`
const Slider = (props) => {
  const { options } = props;
  return (
    <Fieldset className="slidecontainer">
      <ImageContainer>
        {options.map(({ id }) =>
          <Image src="placeholder.png" key={id}/>
        )}
      </ImageContainer>
      <ValueSlider type="range" className="slider" {...props} required />
      <SVG role="slider" width="100%" height="10">
        {options.map(({ value, id }, index) =>
          <Rect className="range__tick" key={id} value={value} x={`${(index / (options.length - 1)) * 100}%`} y="3"
                width="2" height="10"/>
        )}
      </SVG>
      <LabelContainer>
        {options.map(({ label }) =>
          <p key={label}>{label}</p>
        )}

      </LabelContainer>
    </Fieldset>
  )
}

export default Slider;