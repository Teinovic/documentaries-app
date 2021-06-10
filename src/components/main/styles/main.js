import styled from 'styled-components'

export const MainFrame = styled.div`  
    margin-left: 1em;
    margin-right: 1em;

    @media (min-width: 675px) {
        padding: 1em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1em;
    }
    @media (min-width: 1000px) {
        padding: 1em;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1em;
    }
`

export const FilmContainer = styled.div`
    text-align: center;
`

export const FilmTitle = styled.h2`
    text-align: center;
    margin-top: 1em;
    margin-bottom: 0.7rem;
    font-weight: 350;
    font-size: 1.7rem;
    color: black;

    :hover {
        color: #5DE0D3;
        cursor: pointer;
    }
`

export const FilmImage = styled.img`
    text-align: center;
    height: 18rem;

    @media (min-width: 675px) {
        height: 23rem;
    }
`