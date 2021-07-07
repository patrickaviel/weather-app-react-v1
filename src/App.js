import React from 'react';
import Axios from 'axios';

import WeatherInfo from './components/WeatherInfo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

class App extends React.Component {

    state = {
        coordinates: {
            latitude: 50,
            longitude: 50
        },
        data: {},
        region: "",
        error: false
    }

    componentDidMount() {
        // Get current device location
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                let newCoordinates = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }

                this.setState({coordinates: newCoordinates});

                let API_KEY = "c5a2e81db901a4351d0a9f44756603ab";
                // API CALL
                Axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.coordinates.latitude}&lon=${this.state.coordinates.longitude}&appid=${API_KEY}`)
                    .then(res=>{
                        console.log(res.data);

                        let weatherInfo = {
                            location: res.data.name,
                            country: res.data.sys.country,
                            description: res.data.weather[0].description,
                            wind_speed: res.data.wind.speed,
                            feels_like: res.data.main.feels_like,
                            humidity: res.data.main.humidity,
                            temperature: res.data.main.temp,
                            pressure: res.data.main.pressure,
                            clouds: res.data.clouds.all
                        };

                        this.setState({data:weatherInfo});
                    })
            });
        }else{
            console.log("Not supported");
        }
    }

    //update the value of the the input field with state
    changeRegion = (value) => {
        this.setState({ region: value })
    }

    // update the value of the region input by the user
    changeLocation = (e) => {
        e.preventDefault()
        let API_KEY = "c5a2e81db901a4351d0a9f44756603ab";
        Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.region}&appid=${API_KEY}`)        
            .then(res => {

                let regionWeather = {
                    location: res.data.name,
                    country: res.data.sys.country,
                    description: res.data.weather[0].description,
                    wind_speed: res.data.wind.speed,
                    feels_like: res.data.main.feels_like,
                    humidity: res.data.main.humidity,
                    temperature: res.data.main.temp,
                    pressure: res.data.main.pressure,
                    clouds: res.data.clouds.all
                }

                this.setState({ data: regionWeather });
            })
            .catch((err)=>{
                this.setState({error:true});
            });
    }
   
    render(){
        return(
            <div className="app">
                <Navbar changeRegion={this.changeRegion} changeLocation={this.changeLocation} />
                {
                    (this.state.error === true) ? (
                        <div className="alert alert-danger container mx-auto" role="alert">Location not Available!</div>
                    ):(
                        ""
                    )
                }
                {(typeof this.state.data != 'undefined') ? (
                    <WeatherInfo data={this.state.data} />
                ):(
                    <p className="lead text-center">Loading....</p>
                )}

                <Footer />
            </div>
        )
    }
}

export default App;