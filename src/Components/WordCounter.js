import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label for="FormControl" className="form-label">Enter your text</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="FormControl" rows="5"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 *  text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    )
}
