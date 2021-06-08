import React from 'react'
import { AboutUs } from '../components'
import { useTranslation } from 'react-i18next'


export default function AboutUsContainer({ children }) {
    const { t } = useTranslation()
    
    return (
        <AboutUs>
            <AboutUs.Title>{t('O nama.1')}</AboutUs.Title>
            <AboutUs.Paragraph>{t('Paragraf1.1')}</AboutUs.Paragraph>
            <AboutUs.Paragraph>{t('Paragraf2.1')}</AboutUs.Paragraph>
            <AboutUs.Paragraph>{t('Paragraf3.1')}</AboutUs.Paragraph>
            <AboutUs.Paragraph>{t('Paragraf4.1')}</AboutUs.Paragraph>
        </AboutUs>
    )
}