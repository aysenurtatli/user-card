import React from 'react'
import PropTypes from 'prop-types'

function NavButton({ Icon, onClick }) {
    return (
        <button
            onClick={onClick}
            className='text-teal-600 text-2xl cursor-pointer bg-teal-50 dark:bg-teal-900 rounded-full p-3'>
            {Icon && <Icon />}
        </button>
    )
}

NavButton.propTypes = {
    Icon: PropTypes.elementType,
};



export default NavButton