import React from 'react'
import styled from 'styled-components'

const Movies = ({movie}) => {
  return (
    <Container>
        <Cart>
          <Img src={movie.image}/>
          <h2>{movie.title}</h2>
        </Cart>
    </Container>
  )
}

export default Movies;

const Container = styled.div`
  background-color: rgb(32, 42, 42);
  padding: 0.5rem;
  border-radius: 5px;
  transition: 500ms ease-in-out;
  :hover{
    transform: scale(1.1);
  }
`

const Cart = styled.div`
  width: 100%;

  h2{
    font-size: 0.8rem;
    font-weight: 400;
    padding: 0.5rem 0;
  }
`
const Img = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  opacity: 0.6;
  :hover{
    opacity: 1;
  }
`
