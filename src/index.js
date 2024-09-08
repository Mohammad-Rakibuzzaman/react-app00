import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router-dom';


const context = React.createContext();
export const CtxConsumer = context.Consumer;
// const ctxProvider = context.Provider;

const animals = ['snake', 'bear', 'tiger'];


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <context.Provider value={{animals: animals}}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/header" element={<Header info="this is a message" myNumber="6" />} />
     
          <Route path="/footer" element={<Footer />} />
        </Routes>

        
      </context.Provider>
        
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
