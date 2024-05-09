import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked ");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success");
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }
  const handleLowClick = () => {
    console.log("Lowercase was clicked ");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase","success");
  }
  const handleCapitalize = () => {
    console.log("Capitalize was clicked ");
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText)
    props.showAlert("Converted to Capitalize","success");
  }
  const handleCopy = () => {
    console.log("Copy was clicked ");
    var newText = document.getElementById("FormControl");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to Clipboard","success");
  }
  const handleClear = () => {
    console.log("Clear was clicked ");  
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared","danger");
  }

  const [text, setText] = useState('Enter text here');
  return (
    <>
      <div className="container">
        <div className={`mb-3 text-${props.mode==='light'?'dark':'light'}`}>
          <h1>Enter your text</h1>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'light':'grey', color: props.mode==='light'?'black':'light'}} id="FormControl" rows="5"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
      </div>
      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>

    </>
  )
}
