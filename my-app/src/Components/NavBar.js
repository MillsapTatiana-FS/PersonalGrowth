import React from 'react'

const NavBar = () => {
    return (
        <div>
        <a href="/">Home</a>
            <ul>
                <li><a href="/about">About Me</a></li>
                <li><a href="/myWork">My Work</a></li>
                <li><a href="/contact">Contact Me</a></li>
            </ul>
        </div>
    );
};
export default NavBar;