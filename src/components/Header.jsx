import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <SHeader>
        <Link to="/">
        News App
        </Link>
    </SHeader>
  )
}
const SHeader = styled.div`
    height: 5rem;
    background: linear-gradient(to right, #0575E6, #021B79);
    margin-bottom: 2rem;
    align-items: center;
    display: flex;
    color: white;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    padding: 0rem 15rem;
    a{
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default Header