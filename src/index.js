import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HP from './HomePage/ProductPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>


 <React.StrictMode>
    <HP />
  </React.StrictMode>


);
// App component is the root element here, as thats what we are giving to ReactDOM in index.js to render it.
reportWebVitals();
