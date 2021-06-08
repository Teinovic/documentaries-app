import React from 'react'
import { AboutUsFrame, AboutUsTitle, AboutUsParagraph } from './styles/aboutUs'

export default function AboutUs({ children, ...restProps }) {
    return (
        <AboutUsFrame {...restProps}>{children}</AboutUsFrame>
    )
}

AboutUs.Title = function Title({ children, ...restProps }) {
    return <AboutUsTitle {...restProps}>{children}</AboutUsTitle>
}

AboutUs.Paragraph = function Paragraph({ children, ...restProps }) {
    return <AboutUsParagraph {...restProps}>{children}</AboutUsParagraph>
}