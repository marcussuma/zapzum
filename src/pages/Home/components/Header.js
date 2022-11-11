import React from "react"

function Header () {
    return (
        <header className="header">
            <div className="toolbar">
                <div >
                    <a href="/">Logo</a>
                </div>
                <div>
                    <input></input>
                    <button>ok</button>
                </div>
                <div>
                    <button>entrar</button>
                    <span>imgProfile</span>
                </div>
            </div>
        </header>
    )
}

export default Header;