import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
  const headerStyle = {
    backgroundColor: '#166866',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    color: 'white',
    border: '1px solid white'
  };

  return (
    <nav className="navbar navbar-expand-lg px-4" style={headerStyle}>
      <a className="navbar-brand text-white" href="#" >
        <img src={`${process.env.PUBLIC_URL}/logoSomier.png`} alt="Logo" style={{ height: '40px' }} />
        
      </a>
      <div className="ms-auto">

        <Link to="/" className="btn me-2" style={buttonStyle}>home</Link>
        <Link to="/contact" className="btn me-2" style={buttonStyle}>contacto</Link>

      </div>
    </nav>
  );
}

export default Header;