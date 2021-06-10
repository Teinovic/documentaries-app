import React from 'react'
import { Main } from '../components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function MainContainer() {
    const { t } = useTranslation()
    
    return (
        <Main>
            <Main.Container>
                <Link to='/Blizanci' style={{textDecoration: 'none'}}>
                    <Main.Title>{t('Film1.1')}</Main.Title>
                    <Main.Image src='/images/films/Invaliditet.jpg' alt='disability'/>
                </Link>
            </Main.Container>
            <Main.Container>
                <Link to='/Kanta' style={{textDecoration: 'none'}}>
                    <Main.Title>{t('Film2.1')}</Main.Title>
                    <Main.Image src='/images/films/Kanta.jpg' alt='trashcan'/>
                </Link>
            </Main.Container>
            <Main.Container>
                <Link to='/NeBrzeOdPropisa' style={{textDecoration: 'none'}}>
                    <Main.Title>{t('Film3.1')}</Main.Title>
                    <Main.Image src='/images/films/Voznja.jpg' alt='traffic accident'/>
                </Link>
            </Main.Container>
            <Main.Container>
                <Link to='/PozitivnaBiologija' style={{textDecoration: 'none'}}>
                    <Main.Title>{t('Film4.1')}</Main.Title>
                    <Main.Image src='/images/films/Seksualno obrazovanje.jpg' alt='sex-ed'/>
                </Link>
            </Main.Container>
            <Main.Container>
                <Link to='/PricajMi' style={{textDecoration: 'none'}}>
                    <Main.Title>{t('Film5.1')}</Main.Title>
                    <Main.Image src='/images/films/Narkomanija.jpg' alt='drug abuse'/>
                </Link>
            </Main.Container>
            <Main.Container>
                <Link to='/StvaranSvet' style={{textDecoration: 'none'}}>
                    <Main.Title>{t('Film6.1')}</Main.Title>
                    <Main.Image src='/images/films/Stvarni svet-soc mreze.jpg' alt='social networks'/>
                </Link>
            </Main.Container>
        </Main>
    )
}