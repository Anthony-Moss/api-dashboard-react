import React from 'react';


function Weather({data}) {
    return (
        <ul>
            <li>name: {data.name}</li>
        </ul>
    );
}

// Weather API URL https://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&appid=480f3b49133aec8af4ff0b38c34ef12c

export default Weather;