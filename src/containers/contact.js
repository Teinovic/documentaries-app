import React from 'react'
import { AboutUs } from '../components'
import { useTranslation } from 'react-i18next'

export default function ContactContainer({children}) {
    const { t } = useTranslation()

    return (
        <AboutUs>
            <AboutUs.Title>{t('KontaktNaslov.1')}</AboutUs.Title>
            <AboutUs.Paragraph>{t('KontaktAgencija.1')}</AboutUs.Paragraph>
            <AboutUs.Paragraph>{t('KontaktAdresa1.1')}</AboutUs.Paragraph>
            <AboutUs.Paragraph>{t('KontaktAdresa2.1')}</AboutUs.Paragraph>
            <AboutUs.Paragraph>{t('KontaktMejl.1')}</AboutUs.Paragraph>
            <AboutUs.Paragraph>{t('KontaktTelefon1.1')}</AboutUs.Paragraph>
            <AboutUs.Paragraph>{t('KontaktTelefon2.1')}</AboutUs.Paragraph>
            <AboutUs.Paragraph>{t('PIB.1')}</AboutUs.Paragraph>
            <AboutUs.Paragraph>{t('MaticniBroj.1')}</AboutUs.Paragraph>
            <AboutUs.Paragraph>{t('TekuciRacun.1')}</AboutUs.Paragraph>
        </AboutUs>
    )
}