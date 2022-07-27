import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Create from './components/Create';
import Post from './components/Post';
import Update from './components/Update';

const GlobalStyle = createGlobalStyle`
* {padding: 0; margin: 0;}

a {text-decoration: none; color: black;}

ul,ol,li {list-style: none;}`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Routes>
    <Route path='/' exact element={<Home/>} />
    <Route path='/create' exact element={<Create/>} />
    <Route path='/post/:id' exact element={<Post/>}/>
    <Route path='/update/:id' exact element={<Update/>}/>
    </Routes>
   
    </>
  );
}

export default App;
