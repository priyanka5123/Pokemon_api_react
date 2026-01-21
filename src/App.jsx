import { useState } from 'react';
import PokemonList from './PokemonList';
import PokemonEvents from './PokemonEvents';
import './App.css';

function App() {
  const [showPokemonList, setShowPokemonList] = useState(false); // State to control visibility

  return (
      <div className="App">
          <h1>Welcome to the Pokemon App</h1>
          {/* Button to toggle the visibility of the PokemonList component */}
          <button onClick={() => setShowPokemonList(!showPokemonList)}>
              {showPokemonList ? 'Hide Pokemon List' : 'Show Pokemon List'}
          </button>

          {/* Conditionally render the PokemonList component */}
          {showPokemonList && <PokemonList />}
          <PokemonEvents />
      </div>
  );
}

export default App;