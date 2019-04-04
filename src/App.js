import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {
        name: 'Vikas Kumar',
        age: 25
      },
      {
        name: 'Ranjini Dubey',
        age: 23
      },
      {
        name: 'Ravan',
        age: 'too long'
      },
      {
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

  nameChangedHandler = event => {
    this.setState({
      people: [
        {
          name: event.target.value,
          age: 25
        },
        {
          name: 'Ranjini Dubey',
          age: 23
        },
        {
          name: 'Ravan',
          age: 'too long'
        },
        {
          name: 'Upasana',
          age: 1
        }
      ]
    });
  };

  togglePeopleHandler = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let people = null;
    if (this.state.showPeople) {
      people = (
        <div>
          <Person
            name={this.state.people[0].name}
            age={this.state.people[0].age}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.people[1].name}
            age={this.state.people[1].age}
            click={this.switchNameHandler.bind(this, 'RAVAN!!!')}
          />
          <Person
            name={this.state.people[2].name}
            age={this.state.people[2].age}
          >
            My hobbies: Racing
          </Person>
          <Person
            name={this.state.people[3].name}
            age={this.state.people[3].age}
          />
        </div>
      );
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
