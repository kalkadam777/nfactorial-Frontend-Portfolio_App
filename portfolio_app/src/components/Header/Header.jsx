import './Header.css'
import React, { useRef } from 'react';
import { Link, useNavigate, } from 'react-router-dom';


function Header() {
    const navigate = useNavigate()
    const handleClick = (id) => {
        // const element = document.getElementById(id);
        // if (element) {
        //   element.scrollIntoView({ behavior: "smooth" });
        // }
        navigate(id)
    }
    return (
        <div className='container'>
            <div className='left_side'>
                <p onClick={() => handleClick('')}>Erkebulan</p>
            </div>

            <div className='right_side'>
                <p onClick={() => handleClick('about')} >About</p>
                <p onClick={() => handleClick('experience')}>Experience</p>
                <p onClick={() => handleClick('projects')}>Projects</p>
                <p onClick={() => handleClick('contacts')}>Contacts</p>
            </div>
            
        </div>
    )

}

export default Header