import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Searched() {

    const[searchedNews, setSearchedNews] = useState([])
    let params = useParams();

    const getArticles = async()=>{
        const response =await axios.get(` https://newsapi.org/v2/everything?q=${params.search}&from=2022-08-18&sortBy=popularity&apiKey=6c9db622b6864304bb3def2ba588f47d`)
        console.log(response.data.articles);
        setSearchedNews(response.data.articles)
      }
      useEffect(()=>{
        getArticles(params.search)
      },[])
  
      return (
        <>
        <ButtonWrapper>
            <Link to = '/'>
            <Button>Home Page</Button>
            </Link>
        </ButtonWrapper>
          <Grid>
          {
              searchedNews.map((item)=>{
                  return(
                      <Card key={item.id}>
                <a href={item.url} >
                <img src={item.urlToImage} alt=""/>
                <h4>{item.title}</h4>    
                </a>
              </Card>
            )
          })
          }
        </Grid>
                  </>
      )
}
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 2fr));
    grid-gap: 3rem;
    padding:2rem;
`;
const Card = styled.div`
    img{
        width:100%;
        height: 300px;
        border-radius:2rem;
    }
    a{
        text-decoration: none;
        color: white;
    }
    h4{
        text-align:center;
        padding: 1rem
    }
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
    margin-bottom:1rem
`
const Button = styled.button`
    cursor:pointer;
    padding: 1rem 2rem;
    border-radius:2rem;
    font-size: large;
    background: linear-gradient(to right, #0575E6, #021B79);
    color:white;
    border:none;
    :hover{
        /* background: linear-gradient(to right, #0e0e0e, black); */
        border-radius: 2rem 0 2rem 0;
        transition: 1s;
    }
`


export default Searched