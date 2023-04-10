import React from 'react'

// ADDED
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Login';
import Index from '../pages/index';

function Routing() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = { <Index /> }/>
                <Route path='/login' element = { <Login /> }/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default Routing;