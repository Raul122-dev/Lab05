import React, { useState } from 'react'
import Filter from './components/Filter'
import Person from './components/Person'
import PersonForm from './components/PersonForm'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch] = useState('')

  
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

  const handleChangeFilter = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleChangeFilter={handleChangeFilter} search={search}/>

      <h3>Add a new</h3>

      <PersonForm handleSubmit={handleSubmit} handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} newName={newName} newNumber={newNumber}/>

      <h3>Numbers</h3>

      {persons
        .filter(persona => persona.name.includes(search))
        .map((persona) => <Person key={persona.name} person={persona}/>)}
    </div>
  )
  
}

export default App