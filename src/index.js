import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Clock from './components/Clock';
import Form from './components/Form';
// import ListForm from './components/ListForm'


ReactDOM.render(
  <React.StrictMode>
    <Clock locale="bn-BN"/>
    <Form />
    {/* <ListForm/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

