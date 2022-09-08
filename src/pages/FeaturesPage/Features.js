import React from 'react'
import { homeObjThree } from './Data';
import { InfoSection, Pricing } from '../../components';

const Features = () => {
    return (
        <>
            <InfoSection {...homeObjThree} />
            <Pricing />
        </>
    )
};

export default Features;