import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from './components/rating/Rating';

function App() {
  return (
    <div className="App">
      <Rating onChange={(index)=>console.log(index)}/>
    </div>
  );
}

export default App;
