import React from "react";

const Numbers = ({namesToShow}) => {
  console.log(namesToShow)
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {namesToShow.map((person) => (
          <li key={person.name}>
            {person.name} {person.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Numbers;
