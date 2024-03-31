import './Home.css'
import Promo from '../Promo/Promo'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Project from '../Project/Project'
import Experience from '../Experience/Experience'
import Header from '../Header/Header';
import React, { useRef } from 'react';


function Home() {

    return (

       <>
        <Promo/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
       </>
    )

}

export default Home