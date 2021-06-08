import React from 'react'
import { MainFrame, FilmContainer, FilmTitle, FilmImage } from './styles/main'

export default function Main({children, ...restProps}) {
    return (
        <MainFrame {...restProps}>{children}</MainFrame>
    )
}

Main.Container = function Container({children, ...restProps}) {
    return (
        <FilmContainer {...restProps}>{children}</FilmContainer>
    )
}

Main.Title = function Title({children, ...restProps}) {
    return (
        <FilmTitle {...restProps}>{children}</FilmTitle>
    )
}

Main.Image = function Image({children, ...restProps}) {
    return (
        <FilmImage {...restProps} />
    )
}