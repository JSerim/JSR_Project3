import React, {Component} from 'react';
import './Header.css';

class Header extends Component{
  render() {
    return(
      <header id='header' className='header'>
        <h1 className='logo'><a href='/'>위드펫</a></h1>
        <nav>
          <a href='#'>Login</a>
          <a href='#'>About Us</a>
          <a href='#'>Care Service</a>
          <a href='#'>Calendar</a>
          <a href='#'>My Pet</a>
        </nav>
    </header>
    );
  }
}

export default Header;
