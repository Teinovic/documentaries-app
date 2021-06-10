import React from 'react'
import { Header } from '../components'
import { useTranslation } from 'react-i18next'
import Dropdown from './dropdown'
import { Link } from 'react-router-dom'


export default function HeaderContainer({ children }) {
    const { t, i18n } = useTranslation()

    function handleLangButtonClick(language) {
        return i18n.changeLanguage(language)
    }

    
    return (
        <Header>
            <Header.Frame>
                <Header.Logo />
                <Header.Title>{t('Dokumentarni filmovi.1')}</Header.Title>
                <Header.SubTitle>Braća Tasić & co.</Header.SubTitle>
                <Header.ButtonContainer>
                    <Header.LanguageButton onClick={()=>handleLangButtonClick('sr')}>sr</Header.LanguageButton>
                    <span>/</span>
                    <Header.LanguageButton onClick={()=>handleLangButtonClick('en')}>en</Header.LanguageButton>
                </Header.ButtonContainer>
                <Header.Navbar>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <Header.NavbarItem>{t('Naslovna.1')}</Header.NavbarItem>
                    </Link>
                    <Header.NavbarItem>
                        <Dropdown />
                    </Header.NavbarItem>
                    
                    <Link to='/aboutUs' style={{textDecoration: 'none'}}>
                        <Header.NavbarItem>{t('O nama.1')}</Header.NavbarItem>
                    </Link>
                    <Link to='/contact' style={{textDecoration: 'none'}}>
                        <Header.NavbarItem>{t('Kontakt.1')}</Header.NavbarItem>
                    </Link>
                </Header.Navbar>
            </Header.Frame>
        </Header>
    )
}