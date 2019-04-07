import React from 'react';
import Person from './Person/Person';
const persons = props =>
  props.people.map((person, index) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        changed={event => {
          props.changed(event, person.id);
        }}
        delete={() => props.delete(index)}
      />
    );
  });

export default persons;
