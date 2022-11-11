import React from "react";
import Header from "./components/Header";
import "./style.css"


function Home () {
    return (
        <div>
            <Header/>
            <main className="main">
                <div className="solicitar">Solicitar</div>
                <div className="coleta">Tipo de coleta</div>
            </main>
        </div>
    )
}

export default Home;