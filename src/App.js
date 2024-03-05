import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './Components/TextForm';
import Word_counter from './Components/Word_counter';


function App() {
  return (
    <>
      {/* <Navbar title = "Electronio"/> */}
      <Navbar />
      <div className="container my-3">
        <TextForm />
      </div>
      <Word_counter/>
      
    </>
   
  );
}

export default App;

