import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  

  const handleChange = (event) =>{
    setNewName(event.target.value)
    //const name = event.target.value 
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const personaAddState = {
      name: newName,
    };
    
    for (let i = 0; i < persons.length; i++) {
      if (newName === persons[i].name) {
        alert(`${newName} is already added to phonebook`)
        personaAddState.name = ""    
      }
    }

    setPersons([...persons, personaAddState])
    setNewName("")

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((persona) => <Person key={persona.name} person={persona}/>)}
    </div>
  )
}

export default App