import React, { Component } from 'react';
import './Pokedex.css';

import Pokecard from '../pokecard/Pokecard';

class Pokedex extends Component {

    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experiance: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experiance: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experiance: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experiance: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experiance: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experiance: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experiance: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experiance: 65},
        ]
    }

    render() {
        let title;

        if(this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winner heading</h1>
        } else {
            title = <h1 className="Pokedex-looser">Loose heading</h1>
        }

        return (
            <div className='Pokedex'>
                <div className="container">
                    <h1>Pokedex</h1>
                    {title}
                    <h4>Pokedex experiance: {this.props.exp}</h4>
                    <div className="Pokedex-cards">
                        {this.props.pokemon.map((item, key)=>{
                            return (
                                <Pokecard key={key}
                                    id={item.id}
                                    name={item.name}
                                    type={item.type}
                                    exp={item.base_experiance}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokedex;