import React from 'react'
import { Background, Container, Logo, Title, SubTitle, ButtonContainer, Button, Navbar, NavbarItem} from './styles/header'



export default function Header({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ ...restProps }) {
    return <Logo {...restProps} />
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Header.ButtonContainer = function HeaderButtonContainer({ children, ...restProps }) {
    return <ButtonContainer {...restProps}>{children}</ButtonContainer>
}

Header.LanguageButton = function HeaderLanguageButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

Header.Navbar = function HeaderNavbar({ children, ...restProps }) {
    return <Navbar {...restProps}>{children}</Navbar>
}

Header.NavbarItem = function HeaderNavbarItem({ children, ...restProps }) {
    return <NavbarItem {...restProps}>{children}</NavbarItem>
}

