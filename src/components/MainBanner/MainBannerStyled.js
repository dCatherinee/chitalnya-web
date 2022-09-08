import styled from 'styled-components';
import Image from '../../images/main-img.jpg'

export const MainBan = styled.section`
    background-image: url(${Image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    padding: 160px 0px;
`;

export const MainBannerContainer = styled.div`
    padding: 6rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MainBannerPreheading = styled.div`
    color: #F2F2F2;
    font-size: 18px;
    font-weight: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 24px;
`;

export const MainBannerHeading = styled.h1`
    color: #ffffff;
    font-size: 64px;
    line-height: 1.1px;
    margin-bottom: 48px;
`;

export const MainBannerText = styled.p`
    color: #F2F2F2;
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
`;
