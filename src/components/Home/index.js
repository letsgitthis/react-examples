import React from 'react';
import NavBar from '../NavBar';
import { Router, Route, Link, IndexRoute } from 'react-router';

function Home() {
    return(
        <div className="container">
            <NavBar />
            <div>I am the home page</div>
        </div>
    )
}

export default Home;