import styled from 'styled-components'


export const DropdownFrame = styled.div`
    display: none;
    position: absolute;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: auto;
    padding: 1rem;
    border-radius: 15%;
`

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
    width: auto;
    

    :hover ${DropdownFrame} {
        display: block;
    }    
`

export const DropdownButton = styled.a`
    background-color: #f8f8f8;
    color: #7D60E8;
    border: none;
    cursor: pointer;

    :hover,
    :focus {
        color: #5DE0D3;
        cursor: pointer;
    }
`

export const DropdownItem = styled.a`
    text-align: left;
    text-decoration: none;
    font-size: 1rem;
    display: block;
    padding: 0.2;
    margin-bottom: 0.5rem;
    color: black;

    :hover,
    :focus {
        color: #5DE0D3;
        cursor: pointer;
    }
`

 
