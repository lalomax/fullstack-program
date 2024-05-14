const FoundCountry = ({ foundCountry }) => {
  if (foundCountry === null) {
    return null;
  }
  return (
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
  );
};

export default FoundCountry;
