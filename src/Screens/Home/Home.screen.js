import React from 'react';

import './Home.screen.css';
import {Header, NavBar} from '../../Components';
import {HeaderSection, About, Sample, Baker, Contact, Footer} from '../../sections';

const Home = () => {
    return (
        <div className="back-home">
            <main>
                <Header />
                <HeaderSection />
                <About />
                <Sample />
                <Baker />
                <Contact />
                <Footer />
            </main>
            <NavBar />
        </div>
    )
}

export default Home;
