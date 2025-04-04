import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon/WeatherIcon.jsx';
import WeatherData from './WeatherData/WeatherData.jsx'

const WeekWeatherForecast = ({ weather }) => {
    return (
        <div className="weather">
            <h2>{weather.day}</h2>
            <WeatherIcon img={weather.img} imgAlt={weather.imgAlt}/>
            <WeatherData conditions={weather.conditions} time={weather.time}/>
            {/* <WeatherData day={weather.day} conditions={weather.conditions} time={weather.time}/> */}
            {/* <p><span>Conditions: </span>{weather.conditions}</p>
            <p><span>Time: </span>{weather.time}</p> */}
        </div>
    )
}

export default WeekWeatherForecast;