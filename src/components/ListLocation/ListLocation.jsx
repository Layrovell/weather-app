/* eslint-disable */
import React from 'react';
import './ListLocation.scss';
import { ItemLocation } from '../ItemLocation/ItemLocation';

export const ListLocation = ({ cards, refresh, handleDeleteElement, onAddNewLocation }) => (
  <section className="cards__list">
    <article className="cards__list--items">
      {cards && cards.map((card, idx) => (
        <ItemLocation
          key={idx.toString()}
          card={card}
          refresh={refresh}
          handleDeleteElement={handleDeleteElement}
          onAddNewLocation={onAddNewLocation}
          {...card}
        />
      ))}
    </article>
  </section>
);
