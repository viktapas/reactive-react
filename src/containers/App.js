import React, { Component } from 'react';
import styles from './App.module.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
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
    // create copy of object
    const _people = this.state.people.slice();
    _people.splice(personIndex, 1);
    this.setState({ people: _people });
  };

  render() {
    let people = null;
    if (this.state.showPeople) {
      people = (
        <People
          people={this.state.people}
          delete={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    return (
      <WithClass classes={styles.App}>
        <Cockpit
          appTitle={this.props.title}
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePeopleHandler}
        />
        {people}
      </WithClass>
    );
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, "Hi, I'm a React App")
    // );
  }
}

export default App;
