import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css';
// import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp value={5} /> */}
    <FirstApp title="Hola mundo" subTitle="El subtítulo" name="Porfirio" />
  </React.StrictMode>,
);
