import React, {Component} from 'react';

import classes from  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Antonio', age: 43 },
      { id: '2', name: 'Max', age: 29 },
      { id: '3', name: 'Manu', age: 32 },
      { id: '4', name: 'John', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const douesShow = this.state.showPersons;
    this.setState({ showPersons: !douesShow });
  }

  render() {
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons) {
      persons = <Persons 
                  persons={this.state.persons} 
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}/>                                          
    }

    return (
        <div className={classes.App}>   
          <Cockpit 
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              clicked={this.togglePersonsHandler}/>
          { persons }  
        </div>        
    );
   }  
  
}

export default App;