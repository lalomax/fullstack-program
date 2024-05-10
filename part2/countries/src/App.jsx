import { useState, useEffect } from "react";
import axios from "axios";
import Notification from "./components/Notification";

function App() {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState({});
  const [country, setCountry] = useState(null);
  const [found, setFound] = useState(null);
  const [foundCountry, setFoundCountry] = useState(null);
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
            setFoundCountry(response.data);
            console.log("found", foundCountry);
          });
      }

      if (countriesToShow.length <= 10) {
        setFound(countriesToShow);
        return;
      }
    }
  }, [country]);

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

  return (
    <>
      <form onSubmit={onSearch}>
        find country: <input value={value} onChange={handleChange} />
        <Notification message={message} />
        {/* <button type="submit">exchange rate</button> */}
      </form>
      {found && found?.map((el) => <p key={el}>{el}</p>)}
      {foundCountry && (
        <div>
          <h1>{foundCountry.common}</h1>
          <p>{foundCountry.capital}</p>
          <p>
            {foundCountry && `area:`} {foundCountry.area}
          </p>
          {`Languages :`}
          <ul>
            {Object.values(foundCountry.languages).map((lan) => {
              return <li>{lan}</li>;
            })}
          </ul>
          <img src={foundCountry.flags.png} alt={foundCountry.flags.alt} />
        </div>
      )}
    </>
  );
}

export default App;
