import React from "react";

export default function Card(){
    return <div className="card">
    <img src="src/assets/Rectangle 77.png"/>
    <div className="card-content">
        <div className="card--title">
                <div className="card---location">
                    <img src="src/assets/location.png"/>
                    <p>JAPAN</p>
                </div>
            <a href="google.com">View on Google Maps</a>
        </div>
        <div className="card---text">
            <strong>12 Jan, 2021 - 24 Jan, 2021</strong>
            <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
        <hr/>
    </div>
    </div>
}