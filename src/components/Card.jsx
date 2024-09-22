import React from "react";

export default function Card(props){
    return <div className="card">
    <img src={props.imageUrl}/>
    <div className="card-content">
        <div className="card--title">
                <div className="card---location">
                    <img src="src/assets/location.png"/>
                    <p>{props.location}</p>
                </div>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="card---text">
            <h2>{props.title}</h2>
            <strong>{props.startDate} - {props.endDate}</strong>
            <p>{props.description}</p>
        </div>
        <hr/>
    </div>
    </div>
}