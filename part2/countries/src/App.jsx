import { useState, useEffect } from "react";
import axios from "axios";
import Notification from "./components/Notification";
import Found from "./components/Found";

function App() {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState({});
  const [country, setCountry] = useState(null);
  const [found, setFound] = useState(null);
  const [foundCountry, setFoundCountry] = useState(null);
  const [weather, setWeather] = useState(null);
  const [message, setMessage] = useState(null);

  //recover all countries and set it to countries variable

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data.map((object) => object.name.common));
        console.log("effect run, countries is filled", countries.length);
        // console.log("orlando")
      });
  }, []);

  useEffect(() => {
    console.log("effect run, country is now", country);

    // omitir si el pais no está definido
    if (country) {
      console.log("found", countriesToShow.length);
      if (countriesToShow.length > 10) {
        setMessage(`Too many matches, specify another filter`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);

        return;
      }

      if (countriesToShow.length === 1) {
        console.log("trayendo el pais...", country);
        axios
          .get(
            `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`
          )
          .then((response) => {
            setFoundCountry(() => response.data);
            setFound(null);
            console.log("found countrx", foundCountry);

            return;
          });
      }

      if (countriesToShow.length <= 10) {
        setFound(countriesToShow);
        return;
      }
    }
  }, [country]);

  useEffect(() => {
    const lat = foundCountry?.latlng[0];
    const long = foundCountry?.latlng[1];

    console.log(lat, long);
    axios
      .get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${
          import.meta.env.VITE_WEATHERAPIKEY
        }`
      )
      .then((response) => {
        setWeather(response.data);
        console.log("weather y: ", weather);
      });
  }, [foundCountry]);

  // How many countries to show
  const countriesToShow = !country
    ? countries
    : countries.filter((el) => {
        if (el.toUpperCase().includes(country.toUpperCase())) return el;
      });

  const handleChange = (event) => {
    setValue(event.target.value);
    setFound(null);
    setFoundCountry(null);
  };

  const onSearch = (event) => {
    setCountry(value);
    event.preventDefault();
  };

  const showCountry = (country) => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
      .then((response) => {
        setFoundCountry(response.data);
        setFound(null);
        setValue(country);
        console.log("found", foundCountry);
        return;
      });

    console.log(country);
  };

  return (
    <>
      <form onSubmit={onSearch}>
        find country: <input value={value} onChange={handleChange} />
        <Notification message={message} />
      </form>
      {foundCountry && (
        <div>
          <h1>{foundCountry.name.common}</h1>
          <p>{foundCountry.capital}</p>
          <p>
            {`area:`} {foundCountry.area}
          </p>
          {`Languages :`}
          <ul>
            {Object.values(foundCountry?.languages).map((lan) => {
              return <li>{lan}</li>;
            })}
          </ul>
          <img src={foundCountry.flags.png} alt={foundCountry.flags.alt} />
          <h1>Weather in {foundCountry.name.common}</h1>
        </div>
      )}
      {weather && (
        <div>
          <div>temperature : {weather.current.temp}</div>
          <div>wind : {weather.current.wind_speed} m/s</div>
        </div>
      )}
      {found?.map((country) => {
        return (
          <Found
            country={country}
            showCountry={() => showCountry(country)}
          ></Found>
        );
      })}
    </>
  );
}

export default App;
