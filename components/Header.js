import { SearchOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
        <Logo>
            <h2><span>Star</span> Movie</h2>
        </Logo>
        <Search>
            <input placeholder="Search..."/>
            <SearchOutlined className='search'/>
        </Search>
        <Btn>
            <Button
            className='btn'
            variant='contained'
            color='primary'
            >Sign In
            </Button>
        </Btn>
    </Container>
  )
}

export default Header;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(32, 42, 42);
    gap: 2rem;
    height: 80px;
    padding: 0 3rem;
`
const Logo = styled.div`
    flex: 0.5;
    h2{
        font-family: 'Lobster Two', cursive;
        font-size: 1.6rem;
        span{
            color: #F82B60;
        }
    }
`
const Search = styled.div`
    display: flex;
    align-items: center;
    flex: 2;
    background-color: black;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    input{
        border: none;
        background-color: transparent;
        outline: none;
        color: white;
        width: 100%;
    }
    .search{
        color: #747474;
    }
`
const Btn = styled.div`
    flex: 0.7;
    text-align: right;
    .btn{
        font-size: 0.8rem;
        width: 5.5rem;
        height: 2.2rem;
    }
`