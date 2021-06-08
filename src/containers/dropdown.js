import React from 'react'
import { Dropdown } from '../components'
import { useTranslation } from 'react-i18next'

export default function DropdownContainer({ children }) {
    const { t } = useTranslation()

    return (
        <Dropdown>
            <Dropdown.Button>{t('Filmovi.1')}</Dropdown.Button>
            <Dropdown.Frame>
                <Dropdown.Item>{t('Film1.1')}</Dropdown.Item>
                <Dropdown.Item>{t('Film2.1')}</Dropdown.Item>
                <Dropdown.Item>{t('Film3.1')}</Dropdown.Item>
                <Dropdown.Item>{t('Film4.1')}</Dropdown.Item>
                <Dropdown.Item>{t('Film5.1')}</Dropdown.Item>
                <Dropdown.Item>{t('Film6.1')}</Dropdown.Item>
            </Dropdown.Frame>
        </Dropdown>
    )
}
