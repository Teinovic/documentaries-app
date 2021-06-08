import React from 'react'
import { DropdownContainer, DropdownFrame, DropdownButton, DropdownItem } from './styles/dropdown'

export default function Dropdown({children, ...restProps}) {
    return (
        <DropdownContainer {...restProps}>{children}</DropdownContainer>
    )
}

Dropdown.Button = function Button({children, ...restProps}) {
    return (
        <DropdownButton {...restProps}>{children}</DropdownButton>
    )
}

Dropdown.Frame = function Frame({children, ...restProps}) {
    return (
        <DropdownFrame {...restProps}>{children}</DropdownFrame>
    )
}

Dropdown.Item = function Item({children, ...restProps}) {
    return (
        <DropdownItem {...restProps}>{children}</DropdownItem>
    )
}