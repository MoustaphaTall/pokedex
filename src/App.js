import React, { Component } from 'react';
import Card from './components/Card';
import Infos from './components/Infos'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],      
      name: null,
      src: null,
      height: null,
      weight: null,
      type: [],
      isPokedexEnabled: false,     
    }

    this.onCardClick = this.onCardClick.bind(this);
  }

  componentDidMount() {
    const { pokemons } = this.state;
    const url = "https://pokeapi.co/api/v2/pokemon-species?limit=807"    

    fetch(url)      
      .then(result => result.json())
      .then(json => {
        json.results.map( (pokemon) => pokemons.push({
          name: pokemon.name, 
          url: pokemon.url
        }));

        this.setState({
          pokemons
        });
      });
  }

  onCardClick(name, src) {        
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;        
        
    fetch(url)
      .then(result => result.json())      
      .then(json => this.setState({
        name: json.name,
        src,
        height: json.height,
        weight: json.weight,
        type: json.types.map(typeS => typeS.type.name),
        isPokedexEnabled: true
      }));   
  }

  renderAllPokemons() { 
    const { pokemons } = this.state;    

    if (pokemons.length === 0) {
      return (
        <div className="col-12 mt-auto">
          <h2>Loading all pokemons…</h2>
        </div>
      );
    }

    return pokemons.map((pokemon, index) => {
      const pokemonName = pokemon.name;      
      let source = `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`;

      return (
        <Card 
          name={pokemonName} 
          key={index} 
          number={index} 
          src={source}
          onClick={() => this.onCardClick(pokemonName, source)}          
        />
      );
    });
      
  }



  render() {    
    // console.log(this.state.pokemons);
    const { name, src, height, weight, type, isPokedexEnabled } = this.state;

    return (
      <>
        {isPokedexEnabled && (
          <Infos 
            name={name} 
            src={src} 
            height={height} 
            weight={weight} 
            type={type}            
          />)}

        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-2">
              <h1>Choose a pokemon</h1>            
            </div>

            <div className="row">
              {this.renderAllPokemons()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;