import React from 'react';
import styles from './cockpit.module.scss';

const cockpit = props => {
  let btnClass = '';
  const classes = [];
  if (props.showPeople) {
    btnClass = styles.red;
  }

  if (props.people.length <= 2) {
    classes.push(styles.red);
  }
  if (props.people.length <= 1) {
    classes.push(styles.uppercase);
  }
  return (
    <div className={styles.Cockpit}>
      {/* <h1>Hi, I'm a React App</h1> */}
      <h1>{props.appTitle}</h1>
      <h2 className={classes.join(' ')}>This is so reactive</h2>
      <button className={btnClass} onClick={props.clicked}>
        Toggle people
      </button>
    </div>
  );
};

export default cockpit;
