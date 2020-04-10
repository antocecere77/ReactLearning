import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Antonio', age: 43 },
      { name: 'Max', age: 29 },
      { name: 'Manu', age: 32 },
      { name: 'John', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS 'this.state.persons[0].name = 'Anto'; 
    this.setState({
      persons: [
        { name: newName, age: 43 },
        { name: 'Max', age: 29 },
        { name: 'Manu', age: 32 },
        { name: 'John', age: 25 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Antonio', age: 43 },
        { name: event.target.value, age: 29 },
        { name: 'Manu', age: 32 },
        { name: 'John', age: 25 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const douesShow = this.state.showPersons;
    this.setState({ showPersons: !douesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white', 
      font: 'inherit',
      border: '1px solid blue', 
      padding: '8px', 
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons === true) {
      persons = (
        <div >
          {this.state.persons.map(person => {
            return <Person 
                name={ person.name } 
                age={ person.age }/>
          })}          
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
            style={style}
            onClick={this.togglePersonsHandler}>Switch Name</button>           
            { persons }  
      </div>    
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
   }  
  
}

export default App;
