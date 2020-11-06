import React from 'react'

const Header = () => {
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em"
    }

    return (
        <header style={headerStyle}>
            <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
                Simple todo app
            </h1>
            <p style={{ fontSize: "18px" }}>
                Please add to-do item(s) through the input field
            </p>
        </header>
    )
}

export default Header