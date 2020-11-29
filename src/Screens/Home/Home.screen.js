import React, { useEffect } from 'react';

import {Header} from '../../Components';
import {HeaderSection, About, Sample} from '../../sections';

const Home = () => {
    return (
        <>
            <Header />
            <HeaderSection />
            <About />
            <Sample />
        </>
    )
}

export default Home;
