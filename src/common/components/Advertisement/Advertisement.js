import React from 'react'
import {Container} from '@material-ui/core'

export default function Advertisement(props) {
    return (
        <div className="aids-container">
            <Container>
               <img src={props.src} alt="aids"/>
            </Container>
        </div>
    )
}
