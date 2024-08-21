import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Library Management</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Books</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/authors">Authors</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
