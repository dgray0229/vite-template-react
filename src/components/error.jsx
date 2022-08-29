import React  from 'react';
import styled from "styled-components";

const ErrorContainer = styled.div`
  background-color: red;
  color: white;
  text-transform: uppercase;
  text-align: center;
  max-width: 500px;
  font-weight: bold;
  margin: .2rem auto;
  padding: .5rem 2rem;
`
const Error = ({ message }) => (
  <ErrorContainer>
    <p>Error: {message}</p>
  </ErrorContainer>
);

export default Error;