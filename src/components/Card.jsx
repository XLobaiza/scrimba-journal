import React from "react";

export default function Card({item}){
    return <div className="card">
    <img src={item.imageUrl}/>
    <div className="card-content">
        <div className="card--title">
                <div className="card---location">
                    <img src="src/assets/location.png"/>
                    <p>{item.location}</p>
                </div>
            <a href={item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="card---text">
            <h2>{item.title}</h2>
            <strong>{item.startDate} - {item.endDate}</strong>
            <p>{item.description}</p>
        </div>
        <hr/>
    </div>
    </div>
}