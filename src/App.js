import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
  }
  return (
    <>
      {/* <Navbar title = "Electronio"/> */}
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3 ">
        <TextForm mode={mode} />
      </div>
      {/* <About/> */}
    
      
    </>
   
  );
}

export default App;

