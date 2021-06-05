import React from 'react'
import { Header } from '../components'

export default function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo />
                <Header.Title>naslov</Header.Title>
                <Header.SubTitle>podnaslov</Header.SubTitle>
                <Header.ButtonContainer>
                    <Header.LanguageButton>srp</Header.LanguageButton>
                    <Header.LanguageButton>eng</Header.LanguageButton>
                </Header.ButtonContainer>
                <Header.Navbar>
                    <Header.NavbarItem>naslovna</Header.NavbarItem>
                    <Header.NavbarItem>filmovi</Header.NavbarItem>
                    <Header.NavbarItem>o nama</Header.NavbarItem>
                    <Header.NavbarItem>kontakt</Header.NavbarItem>
                </Header.Navbar>
            </Header.Frame>
        </Header>
    )
}