import React from 'react'
import { Dropdown } from '../components'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function DropdownContainer({ children }) {
    const { t } = useTranslation()

    return (
        <Dropdown>
            <Dropdown.Button>{t('Filmovi.1')}</Dropdown.Button>
            <Dropdown.Frame>
                <Link to='/Blizanci' style={{textDecoration: 'none'}}>
                    <Dropdown.Item>{t('Film1.1')}</Dropdown.Item>
                </Link>
                <Link to='/Kanta' style={{textDecoration: 'none'}}>
                    <Dropdown.Item>{t('Film2.1')}</Dropdown.Item>
                </Link>
                <Link to='/NeBrzeOdPropisa' style={{textDecoration: 'none'}}>
                    <Dropdown.Item>{t('Film3.1')}</Dropdown.Item>
                </Link>
                <Link to='/PozitivnaBiologija' style={{textDecoration: 'none'}}>    
                    <Dropdown.Item>{t('Film4.1')}</Dropdown.Item>
                </Link>
                <Link to='/PricajMi' style={{textDecoration: 'none'}}>
                    <Dropdown.Item>{t('Film5.1')}</Dropdown.Item>
                </Link>  
                <Link to='/StvaranSvet' style={{textDecoration: 'none'}}>
                    <Dropdown.Item>{t('Film6.1')}</Dropdown.Item>
                </Link>
            </Dropdown.Frame>
        </Dropdown>
    )
}
