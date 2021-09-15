import React from 'react';

import { days } from './data';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {

    render() {
        return (
            <div className="Weather">
                {days.map(day => <WeatherDay key={day.id} day={day} />)}
            </div>
        );
    }
}

export default Weather;

