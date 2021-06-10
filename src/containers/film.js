import React, {useContext} from 'react'
import { Film } from '../components'
import { useTranslation } from 'react-i18next'


export default function FilmContainer({children, ...restProps}) {
    const { t } = useTranslation()
 
    return (
        <Film>
            <Film.Title>{t(`Film${restProps.prop}Naslov.1`)}</Film.Title>
            <Film.SubTitle>{t(`Film${restProps.prop}Podnaslov.1`)}</Film.SubTitle>
            <Film.Paragraph>{t(`Film${restProps.prop}par1.1`)}</Film.Paragraph>
            <Film.Paragraph>{t(`Film${restProps.prop}par2.1`)}</Film.Paragraph>
        </Film>
    )
}