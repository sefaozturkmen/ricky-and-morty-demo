import "./App.css";

import { useState, useEffect } from "react";
import Card from "./components/Card";
function App() {
  const [character, setCharacter] = useState({});
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, []);

  const handleFavourite = (item) => {
    setFavourite((prevState) => [...prevState, item]);
  };

  const isSelected = (item) => {
    return favourite?.includes(item);
  };

  return (
    <div className="App">
      <div className="favourite-container">
        <h4>Favorilerim</h4>
        <div className="character-list">
          {favourite?.length > 0 ? (
            favourite?.map((item) => <Card item={item} />)
          ) : (
            <div>Favori Listen Boş</div>
          )}
        </div>
      </div>
      <h5>Tüm Karakterler</h5>
      <div className="character-list">
        {character?.results?.map((item) => (
          <Card
            item={item}
            handleFavourite={handleFavourite}
            isSelected={isSelected(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
