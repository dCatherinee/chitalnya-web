import React from 'react';
import { MainBan, MainBannerContainer, MainBannerPreheading, MainBannerHeading, MainBannerText } from './MainBannerStyled.js';

const MainBanner = () => {
    return (
        <>
            <MainBan>
                <MainBannerContainer>
                    <MainBannerPreheading>Читальня</MainBannerPreheading>
                    <MainBannerHeading>«Территория эмоций»</MainBannerHeading>
                    <MainBannerText>Книжный клуб, место встреч, клуб настольных игр, беседы с поэтами и писателями, вечера авторской песни, студия «открытый микрофон», коворкинг.</MainBannerText>
                </MainBannerContainer>
            </MainBan>
        </>
    )
}

export default MainBanner;