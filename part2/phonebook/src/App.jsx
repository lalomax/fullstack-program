import { useState } from "react";
function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", phoneNumber: "39-44-2322323" }]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const addName = (event) => {
    event.preventDefault();
    // check null 
    if (!newName) {
      alert("Blank is not allowed")
      return
    }
    const newObject = { name: newName, phoneNumber: newPhoneNumber };
    
    const containsName = (obj, list) => {
      
      let i;
      for (i = 0; i < list.length; i++) {
          if (list[i].name === obj) {
              return true;
          }
      }
  
      return false;
  }

    
    if (containsName(newObject.name, persons)) {
      alert (`${newObject.name} is already added to phonebook`)
    } else {
      setPersons([...persons, newObject]);
      console.log(persons, newName);
      setNewName("");
      setNewPhoneNumber("");
    }
  };

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    console.log(event.target.value);
    setNewPhoneNumber(event.target.value);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        {/* <div>debug: {newName}</div> */}
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li>{person.name} {person.phoneNumber}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
