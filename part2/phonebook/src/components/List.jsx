import React from "react";

const Numbers = ({ namesToShow }) => {
  console.log(namesToShow);
  return (
    <div>
      <ul>
        {namesToShow.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Numbers;
