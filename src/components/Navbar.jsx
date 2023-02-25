import React from "react"
import logo from "/home/nawwa/Desktop/nawwadev2/react-scrimba/airbnb-clone/src/assets/airbnb-logo.png"


export default function Navbar() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }





    return (
        <nav>
            <img src={logo} className="nav--logo" />
            <h1>Good {timeOfDay}!</h1>
        </nav>
    )
}