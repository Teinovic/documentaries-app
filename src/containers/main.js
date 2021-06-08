import React from 'react'
import { Main } from '../components'
import { useTranslation } from 'react-i18next'

export default function MainContainer() {
    const { t } = useTranslation()
    
    return (
        <Main>
            <Main.Container>
                <Main.Title>{t('Film1.1')}</Main.Title>
                <Main.Image src='/images/logo/pabatlogo.png' alt='film image'/>
            </Main.Container>
            <Main.Container>
                <Main.Title>{t('Film2.1')}</Main.Title>
                <Main.Image src='/images/logo/pabatlogo.png' alt='film image'/>
            </Main.Container>
            <Main.Container>
                <Main.Title>{t('Film3.1')}</Main.Title>
                <Main.Image src='/images/logo/pabatlogo.png' alt='film image'/>
            </Main.Container>
            <Main.Container>
                <Main.Title>{t('Film4.1')}</Main.Title>
                <Main.Image src='/images/logo/pabatlogo.png' alt='film image'/>
            </Main.Container>
            <Main.Container>
                <Main.Title>{t('Film5.1')}</Main.Title>
                <Main.Image src='/images/logo/pabatlogo.png' alt='film image'/>
            </Main.Container>
            <Main.Container>
                <Main.Title>{t('Film6.1')}</Main.Title>
                <Main.Image src='/images/logo/pabatlogo.png' alt='film image'/>
            </Main.Container>
        </Main>
    )
}