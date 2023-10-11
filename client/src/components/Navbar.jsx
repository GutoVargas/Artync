import React from "react"


function Navbar() {
    if (window.innerWidth < 768) {
        return (
            <nav>
                <div className="HeaderLogo">
                    <img src='./images/HeaderLogo.png' data-animefirst='bottom' alt='' />
                </div>
            </nav>
        )
    } else {
        return (
            <nav>
                <div className="HeaderLogo">
                    <img src='./images/HeaderLogo.png' data-animefirst='right' alt='' />
                </div>
            </nav>
        )
    }
}

export default Navbar