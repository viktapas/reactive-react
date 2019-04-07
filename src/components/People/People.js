import React, { Component } from 'react';
import Person from './Person/Person';

class People extends Component {
  render() {
    return this.props.people.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          changed={event => {
            this.props.changed(event, person.id);
          }}
          delete={() => this.props.delete(index)}
        />
      );
    });
  }
}
export default People;
