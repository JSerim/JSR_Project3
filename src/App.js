import React, {Component} from 'react';
import './App.css';

/* Component */
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import About_Us from './components/About_Us.js';
import Care from './components/Care.js';

function App() {
  return (
    <div className="App">
    <Header />
    {/* <Main /> */}
    {/* <About_Us /> */}
    <Care />
    <Footer />
    </div>
  );
}

export default App;
