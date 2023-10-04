import React from "react"


function Sucesso() {
    if (window.innerWidth < 768) {
        return (
            <nav>
                <div className="HeaderLogo">
                    <p>Sucesso</p>
                </div>
            </nav>
        )
    } else {
        return (
            <nav>
                <div className="HeaderLogo">
                    <p>Sucesso</p>
                </div>
            </nav>
        )
    }
}

export default Sucesso