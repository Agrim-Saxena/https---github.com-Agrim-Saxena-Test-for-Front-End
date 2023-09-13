import Articlelogo from './Articlelogo.jpg'
import React from 'react';
import Form from './Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <img src={Articlelogo} alt="Your Image" className="center-left" />
    </div>
      <Form />
    </div>
  );
}

export default App;
