import React from 'react'
import Home from './Home'
import About from './About';
import Projects from "./Projects";
import Contactus from './Contactus';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Index() {
    const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        <div className="min-h-screen bg-black">
            <Navbar/>
            <div className="mt-0">
                <div className="top-0">
                    <Home />
                </div>

                <div className="mt-3 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-3">
                    <Projects />
                </div>

                <div className="mt-6 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
                    <About />
                </div>

                <div className="mt-6 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
                    <Contactus />
                </div>
            </div>
            <Footer/>
        </div>
    )
}
