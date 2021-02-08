import React, { useState, useEffect } from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { FindLocation } from './components/FindLocation/FindLocation';
import { ListLocation } from './components/ListLocation/ListLocation';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const saveCards = localStorage.getItem('cards');

    if (saveCards) {
      setCards(JSON.parse(saveCards));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const addLocation = (newLocation) => {
    const itemIndex = cards.findIndex(card => card.id === newLocation.id);

    if (itemIndex > -1) {
      const temp = [...cards];

      temp[itemIndex] = {
        ...temp[itemIndex],
        ...newLocation,
      };
      setCards(temp);
    } else {
      setCards([newLocation, ...cards]);
    }
  };

  const handleDeleteElement = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <FindLocation
        cards={cards}
        onAddNewLocation={addLocation}
      />
      <ListLocation
        onAddNewLocation={addLocation}
        cards={cards}
        handleDeleteElement={handleDeleteElement}
      />
    </div>
  );
}

export default App;
