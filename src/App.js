import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import PropTypes from 'prop-types'
// import TextForm from './Components/TextForm';
import About from './Components/About';



function App() {
  return (
    <>
      {/* <Navbar title = "Electronio"/> */}
      <Navbar />
      {/* <div className="container my-3">
        <TextForm />
      </div> */}
      <About/>
    
      
    </>
   
  );
}

export default App;

