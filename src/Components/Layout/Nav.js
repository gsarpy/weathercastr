import React from 'react';


const Nav = ({appName}) => {

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo center">{appName}</a>
      </div>
    </nav>
  );
}

export default Nav;
