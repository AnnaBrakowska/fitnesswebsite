import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
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
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature
} from './Pricing.elements';

function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>My Services</PricingHeading>
                    <PricingContainer>
                        <PricingCard to='/contact'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiRock />
                                </PricingCardIcon>
                                <PricingCardPlan>FREE</PricingCardPlan>
                                <PricingCardCost>$0.00</PricingCardCost>
                                <PricingCardLength>every Monday</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>30min ZOOM class</PricingCardFeature>
                                    <PricingCardFeature>Cardio / HIIT</PricingCardFeature>
                                    <PricingCardFeature>Beginner / Intermediate</PricingCardFeature>
                                    <PricingCardFeature>Facebook Support Group</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>SIGN UP</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/contact'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCrystalBars />
                                </PricingCardIcon>
                                <PricingCardPlan>1 on 1 Package</PricingCardPlan>
                                <PricingCardCost>$200.00</PricingCardCost>
                                <PricingCardLength>per month</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>8 sessions per month</PricingCardFeature>
                                    <PricingCardFeature>HIIT / Strength</PricingCardFeature>
                                    <PricingCardFeature>All levels</PricingCardFeature>
                                    <PricingCardFeature>Facebook Support Group</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                        <PricingCard to='/contact'>
                            <PricingCardInfo>
                                <PricingCardIcon>
                                    <GiCutDiamond />
                                </PricingCardIcon>
                                <PricingCardPlan>Individual sessions</PricingCardPlan>
                                <PricingCardCost>$40.00</PricingCardCost>
                                <PricingCardLength>per session</PricingCardLength>
                                <PricingCardFeatures>
                                    <PricingCardFeature>online / in person</PricingCardFeature>
                                    <PricingCardFeature>Cardio / HIIT / Strength</PricingCardFeature>
                                    <PricingCardFeature>All levels</PricingCardFeature>
                                    <PricingCardFeature>Facebook Support Group</PricingCardFeature>
                                </PricingCardFeatures>
                                <Button primary>Choose Plan</Button>
                            </PricingCardInfo>
                        </PricingCard>
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    );
}
export default Pricing;