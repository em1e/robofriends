
import React from 'react';
import ReactDOM from 'react-dom/client';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import './components/Card.css';
import CardList from './components/CardList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App CardList={ CardList } />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
registerServiceWorker();
