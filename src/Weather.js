import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: '',
            city: '',
            weather: []
        }
    }

    submitZip = (event) => {
        if(event.key == "Enter"){
            console.log('enter press here!');
            {this._setZip()}
        }
    }

    submitCity = (event) => {
        if (event.key == "Enter"){
            console.log('enter pressed here!');
            {this.getByCity(event.target.value)}
        }
    }
    render() {
        return (
            <div>
                <h2>Weather</h2>
                {/* <input type="number" onKeyPress={(e) => {this.submitZip(e.target.value)}} placeholder="Weather by zip code"></input>
                <input type="text" onKeyPress={this.submitCity} placeholder="Weather by city"></input> */}
                <input type="text" onChange={(e) => {this._setCity(e.target.value)}} placeholder="Weather by city"></input>
                <ul>
                    {
                        this.state.weather.main ? [<li key={'city'}>City: {this.state.weather.name}</li>, <li key={'temp'}>Temp: {Math.floor(this.state.weather.main.temp - 273) * 9/5 + 32}</li>, <li key={'weather'}>Weather: {this.state.weather.weather[0].main}</li>] : null
                    }
                </ul>
            </div>
        )

    }

    async getByZip() {
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip}&appid=480f3b49133aec8af4ff0b38c34ef12c`);
            this.setState({
                weather: response.data,
            })
        } catch(error) {
            return error
        }
    }

    async getByCity() {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},us&appid=480f3b49133aec8af4ff0b38c34ef12c`);
            this.setState({
                weather: response.data,
            })
        } catch(error) {
            return error
        }
    }
    

    _setZip = (zip) => {
        this.setState({
            zip
        }, this.getByZip)
    } 

    _setCity = (city) => {
        this.setState({
            city
        }, this.getByCity)
    }
    
}
// Weather API URL https://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&appid=480f3b49133aec8af4ff0b38c34ef12c

export default Weather;