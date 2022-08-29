import React from 'react';
import styled from "styled-components";

const ProgressBar = ({ bgcolor, completed }) => {

  const ProgressBarContainer = styled.div`
    height: 20px;
    width: 100%;
    background-color: #e0e0de;
    border-radius: 50px;
    margin: 50px;
  `

  const FillerStyles = styled.div`
    height: 100%;
    width: ${completed}%;
    background-color: ${bgcolor};
    border-radius: inherit;
    text-align: right;
  `

  const LabelStyles = styled.span`
    padding: 5px;
    color: white;
    font-weight: bold;
  `


  return (
    <ProgressBarContainer>
      <FillerStyles>
        <LabelStyles>{`${completed}%`}</LabelStyles>
      </FillerStyles>
    </ProgressBarContainer>
  );
};

export default ProgressBar;