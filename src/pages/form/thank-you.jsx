import React, { useContext, useEffect } from "react";
import { Headline } from "../../layouts";
import PaginationContext from "../../utils/paginationContext";

const ThankYou = () => {
  const { getFormData } = useContext(PaginationContext);
  useEffect(() => {
    console.log(getFormData());
  }, []);
  return (<div>
    <Headline>Thank You For Completing The Quiz</Headline>
    <p>Your responses are posted below</p>
    <pre>{JSON.stringify(getFormData(), null, 4)}</pre>
  </div>)
};

export default ThankYou;