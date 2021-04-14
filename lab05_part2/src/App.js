import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleChangeName = (event) =>{
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const personaAddState = {
      name: newName,
      number: newNumber,
    };
    
    for (let i = 0; i < persons.length; i++) {
      if (newName === persons[i].name) {
        alert(`${newName} is already added to phonebook`)
        personaAddState.name = ''
        personaAddState.number = ''   
      }
    }

    setPersons([...persons, personaAddState])
    setNewName("")
    setNewNumber("")

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChangeName} value={newName}/>
          number: <input onChange={handleChangeNumber} value={newNumber}/>
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