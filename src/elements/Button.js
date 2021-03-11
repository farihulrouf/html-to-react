import React from 'react'
import propTypes from 'prop-types'
export default function Button(props) {
    const className = ['button'] //deklarrasi button array
    if (props.isPrimary) className.push("button-primary"); //gabungkan array
    if (props.isWideMobile) className.push("button-wide-mobile"); //gabungkan array
    if (props.isSmall) className.push("button-sm"); //gabungkan array
    
    return <button className={className.join(" ")}>{props.children}     
    </button>;
}

Button.propTypes = {
    isPrimary: propTypes.bool,
    isWideMobile: propTypes.bool,
    isSmall: propTypes.bool,
};