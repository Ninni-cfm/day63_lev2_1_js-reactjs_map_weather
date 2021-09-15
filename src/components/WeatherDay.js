import { icons } from './data';

const WeatherDay = (props) => {
    console.log(props)
    return (
        <div className="WeatherDay">
            <h2>{props.day.weekday}</h2>
            <img src={icons[props.day.icon]} alt="Weather icon" />
            <p>{props.day.temp}°C <span> {props.day.min}°C</span> </p>
        </div>
    );
}
export default WeatherDay;
