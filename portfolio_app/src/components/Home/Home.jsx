import './Home.css'
import React from 'react';
import Promo from '../Promo/Promo'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Project from '../Project/Project'
import Experience from '../Experience/Experience'
import Header from '../Header/Header';

function Home() {
    return (
       <>
        <Header/>
        <Promo/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>
       </>
    )

}

export default Home