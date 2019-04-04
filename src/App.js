import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {
        id: 'sfsdf',
        name: 'Vikas Kumar',
        age: 25
      },
      {
        id: 'weq34',
        name: 'Ranjini Dubey',
        age: 23
      },
      {
        id: 'wu5hs4',
        name: 'Ravan',
        age: 'too long'
      },
      {
        id: 'th4t',
        name: 'Upasana',
        age: 1
      }
    ],
    showPeople: false
  };
  switchNameHandler = newName => {
    // console.log('Was clicked!');
    // this.state.people[0].name = 'dzen'; // WRONG WAY
    this.setState({
      people: [
        {
          name: 'Vivek Kumar',
          age: 25
        },
        {
          name: 'Ranjini Dubey',
          age: 23
        },
        {
          name: newName,
          age: 'too long'
        },
        {
          name: 'Upasana',
          age: 1.5
        }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });
    const _person = Object.assign({}, this.state.people[personIndex]);
    _person.name = event.target.value;
    // coply of `people` obj
    const _people = this.state.people.slice();
    _people[personIndex] = _person;
    this.setState({ people: _people });
  };

  togglePeopleHandler = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };

  deletePersonHandler = personIndex => {
    // // getting refrence (pointer)
    // const _people = this.state.people;
    // // mutating
    // _people.splice(personIndex, 1);
    // this.setState({ people: _people });

    // create copy of object
    const _people = this.state.people.slice();
    _people.splice(personIndex, 1);
    this.setState({ people: _people });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let people = null;
    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={event => {
                  this.nameChangedHandler(event, person.id);
                }}
                delete={() => this.deletePersonHandler(index)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h2>Vikas Kumar</h2>
        <button style={style} onClick={this.togglePeopleHandler}>
          Toggle people
        </button>
        {people}
      </div>
    );
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, "Hi, I'm a React App")
    // );
  }
}

export default App;
