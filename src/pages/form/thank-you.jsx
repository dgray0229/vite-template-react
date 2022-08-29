import React, { useContext, useEffect } from "react";
import { Headline, SubTitle } from "../../layouts";
import PaginationContext from "../../utils/paginationContext";
import styled from "styled-components";

const Results = styled.div`
  margin: .3rem auto;
`
const ThankYou = () => {
  const { getFormData } = useContext(PaginationContext);
  return (<Results>
    <Headline>Thank You For Completing The Quiz</Headline>
    <SubTitle>Your responses are posted below</SubTitle>
    <pre>{JSON.stringify(getFormData(), null, 4)}</pre>
  </Results>)
};

export default ThankYou;