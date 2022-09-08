import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles.js';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSectionStyled.js';

const InfoSection = ({
    lightBg,
    imgStart,
    lightTopLine,
    lightText,
    lightTextDesc,
    primary,
    topLine,
    headline,
    description,
    buttonLabel,
    start,
    img,
    alt
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/'>
                                    <Button big fontBig primary={primary}>{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
};

export default InfoSection;