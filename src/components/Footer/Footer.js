import React from 'react';
import { Button } from '../../globalStyles.js';
import { 
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights
} from './FooterStyled.js';

const footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    {`Хотите получать новости из библиотеки и первым узнавать о новых мероприятиях? Подпишись на нашу рассылку :)`}
                </FooterSubHeading>
                <FooterSubText>
                    Вы можно отписаться от нее в любой момент.
                </FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Ваша почта'/>
                    <Button fontBig>Подписаться</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>О нас</FooterLinkTitle>
                        <FooterLink to='/'>Особенности</FooterLink>
                        <FooterLink to='/'>Что внутри</FooterLink>
                        <FooterLink to='/'>Правила посещения</FooterLink>
                        <FooterLink to='/'>Режим работы</FooterLink>
                        <FooterLink to='/'>Сертификаты</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Библиотека</FooterLinkTitle>
                        <FooterLink to='/'>Книги</FooterLink>
                        <FooterLink to='/'>Абонемент</FooterLink>
                        <FooterLink to='/'>Правила посещения</FooterLink>
                        <FooterLink to='/'>Режим работы</FooterLink>
                        <FooterLink to='/'>Сертификаты</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Мероприятия</FooterLinkTitle>
                        <FooterLink to='/'>Расписание</FooterLink>
                        <FooterLink to='/'>Что внутри</FooterLink>
                        <FooterLink to='/'>Правила посещения</FooterLink>
                        <FooterLink to='/'>Режим работы</FooterLink>
                        <FooterLink to='/'>Сертификаты</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        Читальня
                    </SocialLogo>
                    <WebsiteRights>Читальня © 2022</WebsiteRights>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default footer;