import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Mulish', sans-serif;
}

@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap');
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => ( primary ? '#214001' : '#BF9C88')};
    white-space: nowrap;
    padding: ${({big}) => ( big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => ( fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover{
        transition: all 0.3s ease-out;
        color: #fff;
        background: ${({primary}) => ( primary ? '#022601' : '#214150')};
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`;

export default GlobalStyle;