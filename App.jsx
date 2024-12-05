import { useState, useEffect } from 'react';
import './App.css';
import yallahImage from './assets/yallah-icon.png';


const App = () => {
  return (
    <div className='first-div'>
      <div className="container">
        <img src={yallahImage} alt="Yallah Icon" />
      </div>
    </div>
  );
};

export default App;



