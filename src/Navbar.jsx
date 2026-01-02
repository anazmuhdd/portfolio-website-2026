import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="glass-navbar">
                <a href="https://github.com/anazmuhdd" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
                <a href="https://linkedin.com/in/anazmuhdd" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
                <a href="https://drive.google.com/file/d/1jzOXSZ73sbgz8dIvGhVog3GC8RechBYW/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="nav-link">Resume</a>
            </div>
        </nav>
    );
};

export default Navbar;
