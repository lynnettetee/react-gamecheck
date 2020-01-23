import React from 'react'
import {useState} from 'react'

const Textbox = ({changeAction, valueInput, maxValueReached}) => {
    return (
    <textarea cols={80} rows={10} maxlength={500} onChange={changeAction} value={valueInput}/>
  );
}

const Display = ({message}) => {
  return (
    <div>
      {message}
    </div>
  );
};

const Button = ({label}) => {
  return (
    <button onClick = {() => {alert('Submitted!');}}>
      {label}
    </button>
  );
}

const Review = () => {
  const [value, setValue] = useState('');

  var maxValueReached = false;

  const maxValue = 500;

  const handleChange = (event) => {
      const target = event.target;
      if (target.type === 'textarea' ? setValue(target.value) : setValue(target.files));
  };

  const handleSubmit = () => {
    alert('Submitted!');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <div>Write a review:</div>
          <Textbox changeAction={handleChange} valueInput={value} maxValueReached={maxValueReached}/>
          <div>
            {"Characters remaining: " + (500 - value.length)}
          </div>
        </label>
        <div>Upload photos/videos: </div>
        <input type="file" onChange={handleChange}></input>
          <div>
          <input type="submit"></input>
          </div>
      </form>
    </>
  );
};

export default Review;
