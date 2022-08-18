import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Searched from './Searched';


function Pages() {
    const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/searched/:search' element={<Searched/>}/>
  </Routes>
  )
}

export default Pages