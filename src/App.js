import React from 'react';
import './App.css';
// import { Header } from './components/header'
import Header from './components/header';
import Footer from './components/footer';

// to create a different component
// function OurText(){
//   return <p>This is our text</p>
// }

function createAlert(){
  alert('hello. you clicked here');
}


function App() {
  return (
    <div className="App">
      <Header info="this is a message" myNumber="6"/>
      <Header info="Another info" myNumber="8"/>
      <p>Main Content</p>
      <Footer tradeMark="page by Ratul" myAlert={createAlert}/>
    </div>
  );
}

export default App;
