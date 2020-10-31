import React from 'react'
import { InfoSec } from './InfoSection.elements'
import { Container } from '../../globalStyles'
const InfoSection = ({ lightBg }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow img={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
