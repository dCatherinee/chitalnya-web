import React from 'react';
import { IconContext } from 'react-icons';
import { GiBedLamp, GiBeech } from 'react-icons/gi';
import { FcLike } from 'react-icons/fc';
import { Button } from '../../globalStyles.js';
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLenght,
    PricingCardFeatures,
    PricingCardFeature
} from './PricingStyled.js';

const Pricing = () => {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Абонементы</PricingHeading>
                    <PricingContainer>
                        <PricingCard to='/'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiBedLamp/>
                                </PricingCardIcon>
                                <PricingCardPlan>Базовый</PricingCardPlan>
                                <PricingCardCost>3 000 р.</PricingCardCost>
                                <PricingCardLenght>в месяц</PricingCardLenght>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Доступ к библиотеке</PricingCardFeature>
                                    <PricingCardFeature>Бесплатный wi-fi</PricingCardFeature>
                                    <PricingCardFeature>Проход на 4 мероприятия</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Выбрать</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <FcLike/>
                                </PricingCardIcon>
                                <PricingCardPlan>Улучшенный</PricingCardPlan>
                                <PricingCardCost>5 000 р.</PricingCardCost>
                                <PricingCardLenght>в месяц</PricingCardLenght>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Доступ к библиотеке</PricingCardFeature>
                                    <PricingCardFeature>Бесплатный wi-fi</PricingCardFeature>
                                    <PricingCardFeature>Проход на 8 мероприятий</PricingCardFeature>
                                    <PricingCardFeature>Скидка на кофе 20%</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Выбрать</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiBeech/>
                                </PricingCardIcon>
                                <PricingCardPlan>Членство</PricingCardPlan>
                                <PricingCardCost>9 000 р.</PricingCardCost>
                                <PricingCardLenght>в месяц</PricingCardLenght>
                                <PricingCardFeatures>
                                    <PricingCardFeature>Доступ к библиотеке</PricingCardFeature>
                                    <PricingCardFeature>Бесплатный wi-fi</PricingCardFeature>
                                    <PricingCardFeature>Проход на все мероприятия</PricingCardFeature>
                                    <PricingCardFeature>Бесплатный кофе</PricingCardFeature>
                                    <PricingCardFeature>Вечерний кинотеатр</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Выбрать</Button>
                            </PricingCardInfo>
                        </PricingCard>
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    )
}

export default Pricing;
