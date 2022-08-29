import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
`
const Image = styled.img`
  max-width: 300px;
  display: block;
  margin: auto;
`
const Headline = styled.h1`
  text-transform: uppercase;
`
const Input = styled.input`
  margin: 1rem auto;
  display: block;
  width: 300px;
  height: 2rem;

  &[type=button] {
    height: 4rem;
    padding: .5rem 1rem;
    width: auto;
  }
`

const Continue = styled(Input)`
  &[type=button] {
    background-color: pink;
    color: white;
    display: block;
    font-size: 1.5rem;
    padding: .5rem 1rem;
    text-transform: uppercase;
  }
`

const Label = styled.label`
  visibility: hidden;
`



export { Continue, Container, Image, Headline, Input, Label }
