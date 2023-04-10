import React from 'react'

// ADDED
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import Login from './Login';
import Index from '../pages/index';

function Routing() {
  return (
    <>
      <CookiesProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = { <Login /> }/>
                <Route path='/articles' element = { <Index /> }/>
            </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </>
  );
}

export default Routing;