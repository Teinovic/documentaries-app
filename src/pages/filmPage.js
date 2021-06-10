import React from 'react'
import FilmContainer from '../containers/film'

export default function Film({children, ...restProps}) {
    
    return ( 
         <FilmContainer prop={restProps.prop}/>       
    )
}