import React from 'react'
import { homeObjTwo, homeObjThree } from './Data';
import { InfoSection, Pricing, MainBanner } from '../../components';

const Rules = () => {
    return (
        <>
            <MainBanner />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing />
        </>
    )
};

export default Rules;