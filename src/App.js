import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('dark');
  return (
    <>
      {/* <Navbar title = "Electronio"/> */}
      <Navbar title = "TextUtils" mode = {mode}/>
      <div className="container my-3 ">
        <TextForm />
      </div>
      <About/>
    
      
    </>
   
  );
}

export default App;

