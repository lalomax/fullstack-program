import List from "./components/List";
import AddName from "./components/AddName";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";
import personService from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);
  console.log("render", persons.length, "notes");

  // function handle filter change
  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  // names to show
  const namesToShow = !filter
    ? persons
    : persons.filter((el) => {
        if (el.name.toUpperCase().includes(filter.toUpperCase())) return el;
      });

  // function add name
  const addName = (event) => {
    event.preventDefault();
    // check null
    if (!newName) {
      alert("Blank is not allowed");
      return;
    }
    const newObject = { name: newName, number: newPhoneNumber };

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
      personService.create(newObject).then((returnedNote) => {
        setPersons(persons.concat(returnedNote));
        setNewName("");
        setNewPhoneNumber("");
      });
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
      <List namesToShow={namesToShow} />
    </>
  );
}

export default App;
