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
    margin-bottom: 0.3em;
    font-weight: 300;
    font-size: 1.7rem;
`

export const FilmImage = styled.img`
    height: 300px;
    text-align: center;
`