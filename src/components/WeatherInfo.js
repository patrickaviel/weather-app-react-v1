import React from 'react';
import './WeatherInfo.css';

const WeatherInfo = (props) => {
    // console.log(props);

    const temperature = props.data.temperature - 273.15;
    const wind_speed = props.data.wind_speed * 3.6;

    return (
        <div className="container main-container mt-3 p-3">
            {/* <img src={props.data.img} alt="" className="rounded"  /> */}
            <h1 className="display-6">{temperature.toFixed(0)} °C, {props.data.description}</h1>
            <p className="lead">{props.data.location}, {props.data.country}</p>

            <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Wind Speed (km/hr)</h5>
                            <h1 className="card-text">{wind_speed.toFixed(0)}</h1>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Pressure (millibar)</h5>
                            <h1 className="card-text">{props.data.pressure}</h1>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cloudiness (%)</h5>
                            <h1 className="card-text">{props.data.clouds}</h1>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Humidity (%)</h5>
                            <h1 className="card-text">{props.data.humidity}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo
