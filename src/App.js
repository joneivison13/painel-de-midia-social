import React from 'react';
import Home from './components/Home';
import OverView from './components/OverView';
import './global.css';

function App() {
  return (
    <div className='bd'>
      <div className="gray"></div>
      <Home/>
      <OverView/>
    </div>
  );
}

export default App;
