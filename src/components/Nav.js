import React from "react"

export default function Nav() {
    return (
        <div className="Navbar">
            <img src = {require("../images/troll-face.png")} className = "trollFace"/>
            <p className = "title">Meme Generator</p>
            <p className = "title comment">- What do you Meme?</p>
        </div>
    )
}