import React from 'react'
import Home from './Home'
import About from './About';
import Projects from "./Projects";
import Contactus from './Contactus';

export default function Index() {
    const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        <div className="min-h-screen bg-black">
            <div>
                <div>
                    <Home />
                </div>

                <div className="mt-3">
                    <Projects />
                </div>

                <div>
                    <About />
                </div>

                <div>
                    <Contactus />
                </div>
            </div>
        </div>
    )
}
