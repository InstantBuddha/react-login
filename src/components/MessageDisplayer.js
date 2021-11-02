import React from 'react'

export default function MessageDisplayer(props){
    const inlineCss = {color: 'red'}
    
    return(
        <label style={inlineCss} >{props.message}<br /></label>
    )
}