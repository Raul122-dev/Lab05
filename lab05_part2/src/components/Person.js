import React from 'react'

const Person = (props) => {
    return (
        <div>
            <p>{props.person.name} {props.person.number}</p>
        </div>
    )
}

export default Person
