import React from 'react'

function Header() {
  return (
    <div style={styles.headerContainer}>
        <a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/myWork">My Work</a>
        <a href="/contact">Contact Me</a>
    </div>
    )
}

export default Header

const styles = {
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#d9bdaf',
        color: '8f8369',
        padding: '60px',
        fontSize: '20px',
        fontWeight: 'bold',
    },
}