const WeatherData = ({ day, conditions, time }) => {
    return (
        <>
        {/* <h2>{day}</h2> */}
        <p><span>Conditions: </span>{conditions}</p>
        <p><span>Time: </span>{time}</p>
        </>
    )
} 

export default WeatherData