import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonCard from "./PokemonCard";
function App() {
  const [count, setCount] = useState(0);

  return(
  <>
    <PokemonCard /> 
    </>
  )
}

export default App;
