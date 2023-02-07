import React, {Component} from 'react';
import './App.css';

/* Component */
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import About_Us from './components/About_Us.js';

function App() {
  return (
    <div className="App">
    <Header />
    {/* <Main /> */}
    <About_Us />
    <Footer />
    </div>
  );
}

export default App;
