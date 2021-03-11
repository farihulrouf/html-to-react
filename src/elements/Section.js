import React from 'react'

import propTypes from 'prop-types'
export default function Section(props) {
    const className = ['sectionn']
    className.push(props.className)
    if(props.iseCenterContent)
    className.push("center-content")
    return (
        <section className={className.join(" ")}>
            {props.children}
        </section>
    )
}
Section.propTypes = {
    iseCenterContent: propTypes.bool,
    className: propTypes.string
}