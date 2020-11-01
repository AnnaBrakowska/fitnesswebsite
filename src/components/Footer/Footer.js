import React from 'react'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubheading,
    FooterSubtext,
    Form,
    FormInput,
    SocialMedia,
    SocialLogo,
    SocialMediaWrap,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './Footer.elements'
import { Button } from '../../globalStyles'

import {
    FaFacebook,
    FaInstagram,
    FaYoutube
} from 'react-icons/fa';

function Footer() {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubheading>
                    Join an exclusive membership to receive my monthly newsletter & find the best training option that suits you.
                </FooterSubheading>
                <FooterSubtext>You can unsubscribe at any time</FooterSubtext>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your email" />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
            MilkFit
          </SocialLogo>
                    <WebsiteRights>MilkFit © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/Lucahdsupreme' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/omarie_bradz/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                            href={
                                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                            }
                            rel='noopener noreferrer'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
