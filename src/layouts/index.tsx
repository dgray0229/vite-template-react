import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
  padding: 1rem 5rem;
  color: #232323;
  width:auto;
`
const Image = styled.img`
  max-height: 300px;
  max-width: 300px;
  display: block;
  margin: auto;
`
const Headline = styled.h1`
  text-transform: uppercase;
  text-align: center;
`
const Input = styled.input`
  border-radius: 1rem;

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
    background-color: #E10098;
    color: white;
    display: block;
    font-size: 1.5rem;
    padding: .5rem 3rem;
    text-transform: uppercase;
  }
`

const Label = styled.label`
  visibility: hidden;
`

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
`
const SubTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`


export {Continue, Container, Image, Headline, Input, Label, Title, SubTitle}
