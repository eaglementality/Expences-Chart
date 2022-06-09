import React, { Component } from 'react';
import '../HEADER/header.css';
import picture from '../images/logo.svg';
    
class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className='header_container'>
            <div className='header'>
                   My balance
               <br/>  
          <img className='logo' src={picture} alt=''/>
                <br/>
          <span>$921.48</span>
         </div>
      </div>
        );
    }
}
 
export default Header;