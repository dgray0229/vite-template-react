import React, { useContext, useEffect } from "react";
import { Continue, Headline, SubTitle } from "../../layouts";
import PaginationContext from "../../utils/paginationContext";
import styled from "styled-components";

const Results = styled.div`
  margin: .3rem auto;
`
const ThankYou = () => {
  const { getFormData, startOver } = useContext(PaginationContext);
  return (<Results>
    <Headline>Thank You For Completing The Quiz</Headline>
    <SubTitle>Your responses are posted below</SubTitle>
    <pre>{JSON.stringify(getFormData(), null, 4)}</pre>
    <Continue type="button" value="Start Over?" onClick={startOver}/>
  </Results>)
};

export default ThankYou;