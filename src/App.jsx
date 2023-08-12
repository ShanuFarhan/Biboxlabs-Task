import { useState } from 'react'

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Description from './Components/Description/Description';
import Cart from './Components/Cart/Cart';

function App() {
 

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Description/>} />
          <Route path="/cart" element={<Cart/>} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
