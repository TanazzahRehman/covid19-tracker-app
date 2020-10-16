import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export {default as Charts}  from './Components/Charts/Charts';
export {default as Cards}  from './Components/Cards/Cards';
export {default as CountryPicker}  from './Components/CountryPicker/CountryPicker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


