import React from 'react'
import PropTypes from 'prop-types'

function Button({ text, bgColor = "bg-teal-100 dark:bg-teal-900", textColor = "text-teal-700 dark:text-teal-100" }) {
    return (
        <button className={`${bgColor} ${textColor} w-40 h-12 font-medium cursor-pointer rounded-sm border-2 border-teal-100 dark:border-teal-900 hover:bg-teal-100 dark:hover:bg-teal-900 duration-200`}>{text}</button >
    )
}


Button.propTypes = {
    text: PropTypes.string
}

export default Button