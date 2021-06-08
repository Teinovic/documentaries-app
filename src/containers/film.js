import React from 'react'
import { Film } from '../components'
import { useTranslation } from 'react-i18next'


export default function FilmContainer() {
    const { t } = useTranslation()
    
    let captured = (window.location.search.split('film=')[1]||'').split('&')[0]
    let result = captured ? captured : 'myDefaultValue';
    
    return (
        <Film>
            <Film.Title>{t(`Film${result}Naslov.1`)}</Film.Title>
            <Film.Paragraph>{t(`Film${result}par1.1`)}</Film.Paragraph>
            <Film.Paragraph>{t(`Film${result}par2.1`)}</Film.Paragraph>

        </Film>
    )
}