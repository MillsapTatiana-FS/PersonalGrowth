import React from 'react'

function Header() {
  return (
    <div className="header-container">
        <a href="/">Home</a>
        <ul>
            <ul><a href="/about">About Me</a></ul>
            <ul><a href="/myWork">My Work</a></ul>
            <ul><a href="/contact">Contact Me</a></ul>
        </ul>
        
    </div>
    )
}

export default Header