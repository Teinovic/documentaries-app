import React from 'react'
import { Header } from '../components'
import { useTranslation } from 'react-i18next'

export default function HeaderContainer({ children }) {
    const { t, i18n } = useTranslation()

    function handleClick(language) {
        return i18n.changeLanguage(language)
    }
    
    return (
        <Header>
            <Header.Frame>
                <Header.Logo />
                <Header.Title>{t('Dokumentarni filmovi.1')}</Header.Title>
                <Header.SubTitle>Braća Tasić & co.</Header.SubTitle>
                <Header.ButtonContainer>
                    <Header.LanguageButton onClick={()=>handleClick('sr')}>sr</Header.LanguageButton>
                    <span>/</span>
                    <Header.LanguageButton onClick={()=>handleClick('en')}>eng</Header.LanguageButton>
                </Header.ButtonContainer>
                <Header.Navbar>
                    <Header.NavbarItem>{t('Naslovna.1')}</Header.NavbarItem>
                    <Header.NavbarItem>{t('Filmovi.1')}</Header.NavbarItem>
                    <Header.NavbarItem>{t('O nama.1')}</Header.NavbarItem>
                    <Header.NavbarItem>{t('Kontakt.1')}</Header.NavbarItem>
                </Header.Navbar>
            </Header.Frame>
        </Header>
    )
}