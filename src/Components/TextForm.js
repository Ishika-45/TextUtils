import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked ");
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }
  const handleLowClick = () => {
    console.log("Lowercase was clicked ");
    let newText = text.toLowerCase();
    setText(newText)
  }
  const [text, setText] = useState('Enter text here');
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>Enter your text</h1>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="FormControl" rows="5"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>LowerCase</button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>

    </>
  )
}
