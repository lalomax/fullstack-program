import React from "react";

const Numbers = ({ namesToShow }) => {
  console.log(namesToShow);
  return (
    <div>
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
