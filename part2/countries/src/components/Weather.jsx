const Weather = ({ weather }) => {
  if (weather === null) {
    return null;
  }
  return (
    <>
      <div>temperature : {weather.current.temp}</div>

      <img
        src={
          "https://openweathermap.org/img/wn/" +
          weather.current.weather[0].icon +
          "@2x.png"
        }
        alt=""
      />

      <div>wind : {weather.current.wind_speed} m/s</div>
    </>
  );
};

export default Weather;
