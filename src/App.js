import React, { Component } from 'react';
import AddColorForm from './components/AddColorForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AddColorForm onNewColor={(title, color) => {
              console.log('TODO: add new ${title} and ${color} to the list')
          }}/>
      </div>
    );
  }
}

export default App;
