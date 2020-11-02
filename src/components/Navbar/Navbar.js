import React, { useState, useEffect } from 'react'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLink, NavItem, NavItemBtn, NavBtnLink } from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const showButton = () => {
        window.innerWidth <= 960 ? setButton(false) : setButton(true)
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    const closeMobileMenu = () => {
        console.log('Hello  ')
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon /> MILKFIT
                </NavLogo>
                        <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about">About me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/services">Services</NavLink>
                            </NavItem>

                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/contact">
                                        <Button>HIRE ME</Button>
                                    </NavBtnLink>
                                ) : (
                                        <NavBtnLink to="/contact">
                                            <Button onClick={closeMobileMenu} fontBig primary>SIGN UP</Button>
                                        </NavBtnLink>
                                    )
                                }
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
