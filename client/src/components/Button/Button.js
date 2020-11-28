// The purpose of this code, is to help with creating buttons easily
// Use to save time and write DRY code for components
import React from 'react'
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize
}) => {

    // Check for style and size of the button. If there is no style, then apply a style and size from the arrays above
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onclick} type={type}>
            {children}
        </button>
    )
}