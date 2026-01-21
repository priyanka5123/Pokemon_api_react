import { use, useState } from "react";
function PokemonEvents(){
    const [inputValue, setInputValue] = useState('');
    const [eventStatus, setEventStatus] = useState('Pokemon Finder');
    const [pokemon, setPokemon] = useState();
    const [pokemonError, setPokemonError] = useState('');
    const [errorStatus, setErrorStatus] = useState('')
    
    const handleClick = async () => {
        setPokemon(null);
        setPokemonError("");

        if (!inputValue.trim()) return;

        try {
            const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase().trim()}`
            );

            if (!response.ok) {
            throw new Error("Not found");
            }

            const data = await response.json();
            setPokemon(data);
        } catch (error) {
            setPokemonError(`${inputValue} is not a valid Pokémon`);
        }
    };


    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    const handleKeyDown = (event) =>{
        setEventStatus(`Key down: ${event.key}`)
    }
    const handleKeyUp = (event) => {
        setEventStatus(`Key up: ${event.key}`);
    }
    const handleFocus = () => {
        setEventStatus('Input field is focused, type a Pokemon name')
    }
    const handleBlur = () => {
        setEventStatus('Input field lost focus, there will be no searching...');
    }
    const handleMouseOver = () => {
        setEventStatus('Mouse has entered the button, you can click it now!');
    }
    const handleMouseOut = () => {
        setEventStatus('The mouse has left the button, clicking is not possible ):');
    }
    const handleLoad = () =>{
        setEventStatus('Image loaded successfully!');
    }
    const handleError = () => {
        setErrorStatus('Error loading image')
    }
    return(
        <div>
            <h2>Event Handling in React</h2>
            <form>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    onKeyUp={handleKeyUp}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Type a Pokemon name ..."
                />
                <button
                    type="button"
                    onClick={handleClick}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}

                >Load Pokemon</button>
            </form>
            {pokemon && (
                <div>
                    <p style={{ textTransform: 'capitalize'}}><b>{pokemon.name}</b></p>
                    <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} onLoad={handleLoad} onError={handleError}/>
                </div>
            )}
            {pokemonError  && <p style={{color: 'red'}}>{pokemonError}</p>}
            <p>{eventStatus}</p>
            {/* <img
                src='notValidImage.jpg'
                alt="Not Valid Image"
                onLoad={handleLoad}
                onError={handleError}
            /> */}
            {errorStatus && <p style={{color: 'red'}}>{errorStatus}</p>}
        </div>
    );
}
export default PokemonEvents