import styled from 'styled-components'

export const Background = styled.section``

export const Container = styled.div``

export const Logo = styled.img``

export const Title = styled.h1`
    font-family: 'Lora', serif;
    font-weight: 400;
    color: #143774;
    text-align: center;
`

export const SubTitle = styled.h2`
    font-family: 'Lora', serif;
    font-weight: 400;
    color: #143774;
    text-align: center;
`

export const ButtonContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
`

export const Button = styled.button`
    border: none;
    background-color: #f8f8f8;
    margin-right: 2px;
`

export const Navbar = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-right: 45px;

    @media (min-width: 675px) {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const NavbarItem = styled.li`
    text-decoration: none;
    color: #707070;
    font-weight: 700;
    padding: 0;

    :hover,
    :focus {
        color: #1792d2;
        cursor: pointer;
    }
`