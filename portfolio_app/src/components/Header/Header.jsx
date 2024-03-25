import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className='container'>
            <div className='left_side'>
                <Link to="/"><p>Your Name</p></Link>
            </div>

            <div className='right_side'>
                <Link to="/about">About</Link>
                <Link to="/experience">Experience</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contacts</Link>
            </div>
            
        </div>
    )

}

export default Header