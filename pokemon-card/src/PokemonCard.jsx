import './PokemonCard.css' 

export default function PokemonCard() {
  let pokemonNumber = Math.floor((Math.random() * 898) + 1);
  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonNumber}.png`
  return (
    <div className="pokemon-card">
      <h1>Você é o pokemon #{pokemonNumber}</h1>
      <img src={url}/>
    </div>
  );
}
