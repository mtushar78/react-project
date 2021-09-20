import './App.css';
import React from 'react';
import AddContact from './AddContact';
import FuncComp from './functionalCmp';

function App() {
  const contactData = [
    {
      id: 1,
      name: 'Tushar',
      email: 'mtushar78@gmail.com',
      address: 'Senpara Mirpur'
    },
    {
      id: 2,
      name: 'Tuhin',
      email: 'Tuhin@gmail.com',
      address: 'Senpara Mirpur'
    },
    {
      id: 3,
      name: 'Kamrul',
      email: 'kamrul@gmail.com',
      address: 'Senpara Mirpur'
    }
  ];

  return (
    <div className="container">
      <AddContact />
      <FuncComp name="functional Tushar"/>
    </div>


  );
}

export default App;
