import React from 'react'

const NavItem = ({ label, path}) => {

    const navigateTo = (path) => {
        
    }

    return (
        <div className="nav-item" onClick={navigateTo(path)}>
            {label}
        </div>
    )
}

export default NavItem
