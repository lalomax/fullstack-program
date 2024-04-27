import React from "react";

const List = ({person, erasePerson }) => {
  
  return (
    <div>

          <li >
             {person.name} {person.number} <button onClick={erasePerson}> delete </button>
          </li>
        

    </div>
  );
};

export default List;
