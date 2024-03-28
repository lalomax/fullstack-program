import Numbers from "./components/Numbers";
import AddName from "./components/AddName";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";
import axios from "axios"

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  // function handle filter change
  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);

  };

  // names to show
  const namesToShow = !filter ? persons : persons.filter (el => {
    if (el.name.toUpperCase().includes(filter.toUpperCase())) return el
  });

  // function add name
  const addName = (event) => {
    event.preventDefault();
    // check null
    if (!newName) {
      alert("Blank is not allowed");
      return;
    }
    const newObject = { name: newName, phoneNumber: newPhoneNumber };

    //check if name exists
    const containsName = (obj, list) => {
      let i;
      for (i = 0; i < list.length; i++) {
        if (list[i].name === obj) {
          return true;
        }
      }

      return false;
    };

    // check if name is repeated
    if (containsName(newObject.name, persons)) {
      alert(`${newObject.name} is already added to phonebook`);
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
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <AddName
        addName={addName}
        newName={newName}
        newPhoneNumber={newPhoneNumber}
        handleNameChange={handleNameChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <h2>Numbers</h2>
      <Numbers namesToShow={namesToShow} />
    </>
  );
}

export default App;
