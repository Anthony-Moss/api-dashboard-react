import React from 'react';
import './App.css';
import axios from 'axios';
import Weather from './Weather';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render () {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }

  // _getWeather = async () => {
  //   const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&appid=480f3b49133aec8af4ff0b38c34ef12c`);
  //   console.log(response.data);
  //   console.log(response.data.main);
  //   this.setState({
  //     cityName: response.data.name,
  //     temp: response.data.main.temp,
  //     clouds: response.data.weather[0].main,
  //     windSpeed: response.data.wind.speed,
  //     windDir: response.data.wind.deg
  //   }, () => {
  //     console.log('done setting state');
  //   });
  // }

}

export default App;
