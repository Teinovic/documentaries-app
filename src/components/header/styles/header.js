import styled from 'styled-components'

export const Background = styled.section`    
    background: #f8f8f8;
    padding: 1.5em 0;
    text-align: center;
    outline: 2px solid #5DE0D3;
    background-image: url('/images/logo/pabatlogo.png');
    background-repeat: no-repeat;
    background-size: 15%;
    background-position: 10% 10%;

    @media (min-width: 675px) {
        background-position: 10% 10%;
    }
`

export const Container = styled.div``

export const Logo = styled.img`

`

export const Title = styled.h1`
    font-family: 'Lora', serif;
    font-weight: 400;
    font-size: 2rem;
    color: #00000;
    text-align: center;
    margin-bottom:0;
`

export const SubTitle = styled.h2`
    font-family: 'Lora', serif;
    font-weight: 400;
    color: #00000;
    text-align: center;
    margin-top: 0;
    margin-bottom: 2rem;
`

export const ButtonContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
`

export const Button = styled.button`
    border: none;
    background-color: #f8f8f8;
    margin-right: 0.1rem;
    font-size: 1rem;
`

export const Navbar = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0;
    list-style-type: none;
    width: auto;
    margin-bottom: 0;

    @media (min-width: 675px) {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: 100px;
    }
`

export const NavbarItem = styled.li`
    text-decoration: none;
    color: #7D60E8;
    font-weight: 700;
    padding: 0;

    :hover,
    :focus {
        color: #5DE0D3;
        cursor: pointer;
    }
`