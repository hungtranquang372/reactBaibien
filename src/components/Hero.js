import React from 'react'
import PropTypes from 'prop-types'

export default function Hero({ children, hero }) {


    return (
        <header
            className={hero}>{children}</header>
    )

}
// Hero.defaultProps={
//     hero:"defaultHero"
// }
Hero.propTypes = {
    hero: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}