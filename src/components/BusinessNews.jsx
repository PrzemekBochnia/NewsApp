import axios from 'axios';
import React,{useState, useEffect} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from "styled-components";


function BusinesNews() {

  const[articles, setArticles] = useState([]);

  const getArticles = async()=>{
    const response =await axios.get(`https://newsapi.org/v2/top-headlines?category=business&apiKey=6c9db622b6864304bb3def2ba588f47d`)
    console.log(response.data.articles);
    setArticles(response.data.articles)
  }
  useEffect(()=>{
    getArticles()
  },[])

  return (
    <>

      <div>
            <Wrapper>
              <h3>Business News</h3>
              <Splide options={{
                perPage:3,
                arrows:true,
                pagination:false,
                gap:"1rem"
              }}>
              {articles.map((article, index)=>{
                return(
                  <SplideSlide key={index}>
                  <Card>
                    <a href={article.url} >
                      <p>{article.title}</p>
                      <img src={article.urlToImage} alt=''></img>
                      <Gradient/>
                    </a>
                  </Card>
                  </SplideSlide>
                )
              })}
              </Splide>
            </Wrapper>
      </div>
    </>
  )
}
const Wrapper = styled.div`
  margin: 4rem 2rem;
  h3{
    text-align:center;
    margin-bottom:1rem;
    color: white;
  }
`;
const Card = styled.div`
  min-height: 15rem;
  overflow: hidden;
  position: relative;
  border-radius: 2rem;

  
  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  p{
    position: absolute;
    z-index:10;
    left:50%;
    bottom:0%;
    transform: translate(-50%,0%);
    color:white;
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  p:hover{
    font-size: 1.1rem;
    transition: 2s;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position:absolute;
  width:100%;
  height:100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default BusinesNews