import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import { initialData } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: initialData
    };
  }

  // Method to handle state changes from children
  handleUpdate = (id) => {
    console.log("Parent received event for ID:", id);
    const updatedCharacters = this.state.characters.map(char => {
      if(char.id === id) {
        const isHungry = char.status === "Hungry";
         return { 
          ...char,
          status: isHungry ? "Happy" : "Hungry",
      }
        }
      return char;
    });
    this.setState({ characters: updatedCharacters });
    
  }

  render() {
    return (
      <div className="app-container" style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <h1>My Talking Animals</h1>
        
        <div className="children-container" style={{ display: 'flex', gap: '20px', marginTop: '20px', border: '1px solid #292828', padding: '20px', borderRadius: '7px' }}>
          {/* TODO: Map through your state characters here and render ChildComponents */}
              {this.state.characters.map(char => (
                <ChildComponent 
                  id={char.id}
                  name={char.name}
                  imageHappy ={char.imageHappy style={{ width: '200px', height: '200px' }}}
                  imageSad={char.imageSad}
                  status={char.status}
                  onAction={this.handleUpdate}
                />
              ))} 
        </div>
      </div>
    );
  }
}

export default App;
