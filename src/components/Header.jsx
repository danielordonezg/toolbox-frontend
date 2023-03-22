import React from 'react';
import './css/Header.css';

function Header({logo}) {

  return (
    <div>
    <div className="header" />
    <div className="header-container">
    <img src={logo} alt="Logo de toolbox" className="header-img" />
      <h2 className="header-title">Daniel Alexander Gomez</h2>
    </div>
    </div>
  );
};

export default Header;