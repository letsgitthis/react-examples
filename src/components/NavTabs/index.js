import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavTabs() {

    const location = useLocation();

    return(
        <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/pageOne"
          className={location.pathname === "/pageOne" ? "nav-link active" : "nav-link"}
        >
          One
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/pageTwo"
          className={location.pathname === "/pageTwo" ? "nav-link active" : "nav-link"}
        >
          Two
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/PageThree"
          className={location.pathname === "/pageThree" ? "nav-link active" : "nav-link"}
        >
          Three
        </Link>
      </li>
    </ul>
    )
}

export default NavTabs;