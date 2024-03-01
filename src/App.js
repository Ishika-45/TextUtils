import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title = "Electronio"/> */}
      <Navbar />
      <div className="container my-3">
        <TextForm />
      </div>
      
    </>
   
  );
}

export default App;

