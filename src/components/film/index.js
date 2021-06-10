import React from 'react'
import { FilmFrame, FilmTitle, FilmSubtitle, FilmParagraph } from './styles/film'

export default function Film({ children, ...restProps }) {
    return (
        <FilmFrame {...restProps}>{children}</FilmFrame>
    )
}

Film.Title = function Title({ children, ...restProps }) {
    return (
        <FilmTitle {...restProps}>{children}</FilmTitle>
    )
}

Film.SubTitle = function SubTitle({ children, ...restProps }) {
    return (
        <FilmSubtitle {...restProps}>{children}</FilmSubtitle>
    )
}

Film.Paragraph = function Paragraph({ children, ...restProps }) {
    return (
        <FilmParagraph {...restProps}>{children}</FilmParagraph>
    )
}