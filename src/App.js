import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Navbar title = "Electronio"/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 ">
        <Routes>
        <Route exact path="/about" element={<About />} />
        <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} />} />
      </Routes>
        </div>
      </Router>
      {/* <About/> */}

    </>

  );
}

export default App;

