import React, {useState} from 'react'


const [text, setText] = useState('Enter text here');

export default function TextForm(props) {
  return (
    <div>
      <div className="mb-3">
        <label for="FormControl" className="form-label"
        >Enter your text</label
        >
        <textarea
          className="form-control"
          id="FormControl"
          rows="5"
        ></textarea>
      </div>
      <button className="btn btn-primary">UpperCase</button>
    </div>
  )
}
