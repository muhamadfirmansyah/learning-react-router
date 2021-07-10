import React from 'react'

const Navbar = () => {
    return (
        <div style={nav}>
            <h1>Learning React Router</h1>

            <ul style={ul}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;

const nav = {
    display: 'flex',
    background: '#fe024e',
    padding: '0 6rem',
    justifyContent: 'space-between',
    color: '#FFFFFF',
    alignItems: 'center'
}

const ul = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    width: '20%',
}