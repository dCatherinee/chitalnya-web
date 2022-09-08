import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InfoSection, Pricing, MainBanner } from '../../components';

const Home = () => {
    return (
        <>
            <MainBanner />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing />
        </>
    )
};

export default Home;