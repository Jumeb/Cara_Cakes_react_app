import React from 'react';

import styles from './Home.module.css';
import {Header, NavBar} from '../../Components';
import {HeaderSection, About, Sample, Baker, Contact, Footer} from '../../sections';

const Home = () => {
    return (
        <div className={styles.Home}>
            <main>
                <Header />
                <HeaderSection />
                <About />
                <Sample />
                <Baker />
                <Contact />
                {/* <Footer /> */}
            </main>
            <NavBar />
        </div>
    )
}

export default Home;
