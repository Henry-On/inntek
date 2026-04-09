"use client"

import React from 'react'

function CardButtonClient({buttonText="Request Service", onPress}) {

    const clicked = () => {
        if(onPress) onPress()
    }

    return (
        <button className='action-button' onClick={clicked} >
            <span className='button-text'>{buttonText}</span>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
    )
}

export default CardButtonClient