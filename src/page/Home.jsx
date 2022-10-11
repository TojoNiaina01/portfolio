import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Landing from "../components/Landing.jsx";
import Services from "../components/Services.jsx";
import Works from "../components/Works.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <>
            <Landing/>
            <Services/>
            <Works/>
            <Skills/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home
