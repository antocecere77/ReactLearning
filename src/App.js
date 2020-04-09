import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
   render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person name="Antonio" age="43"/>
        <Person name="Max" age="29"/>
        <Person name="Manu" age="32"/>
        <Person name="John" age="25"/>
      </div>    
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
   }  
  
}

export default App;
