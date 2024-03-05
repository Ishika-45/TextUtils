import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text here');
  return (
    <div>
      <div className="mb-3">
        <label for="FormControl" className="form-label">Enter your text</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="FormControl" rows="5"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
    </div>
  )
}
