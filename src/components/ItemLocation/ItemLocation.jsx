import React, { useState } from 'react';
import { addLocation, fetchWeather } from '../../Api/api';
import './ItemLocation.scss';
import { Modal } from '../Modal/Modal';

export const ItemLocation = ({
  onAddNewLocation,
  handleDeleteElement,
  id,
  name,
  card,
}) => {
  const [modalActive, setModalActive] = useState(false);

  const getDay = (timestamp) => {
    const day = new Date(timestamp * 1000);
    const hours = String(day.getHours());

    return hours;
  };

  const updateData = () => {
    fetchWeather(name)
      .then(res => addLocation({ ...res }, onAddNewLocation))
      .catch(err => err);
  };

  return (
    <>
      <div className="card">
        <div className="card__image-container">
          <img
            className="is-scale"
            src={`https://openweathermap.org/img/wn/${card.icon}@2x.png`}
            alt="weather"
          />
        </div>
        <div className="card__content">
          <p className="card__title">{card.name}</p>
          <p className="card__info">
            Date:
            <span>{new Date().toJSON().slice(0, 10).replace(/-/g, '/')}</span>
          </p>
          <p className="card__info">
            Temperature:
            <span>{card.temp.toFixed(0)}</span>
          </p>
          <p className="card__info">
            Feels like:
            <span>{card.feels.toFixed(0)}</span>
          </p>
          <p className="card__info">
            Wind:
            <span>{card.wind}</span>
          </p>
          <div className="has-text-center mt-4">
            <button
              onClick={() => {
                setModalActive(true);
              }}
              className="is-rounded button is-link is-inverted is-small"
              type="button"
            >
              Details
            </button>
            <button
              onClick={updateData}
              className="is-rounded button is-success is-inverted is-small"
              type="button"
            >
              Update
            </button>
            <button
              onClick={() => {
                handleDeleteElement(id);
              }}
              className="is-rounded is-danger is-inverted button is-small"
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {modalActive && (
        <Modal
          modalActive={modalActive}
          setModalActive={setModalActive}
          card={card}
        >
          <div className="intro">
            <div className="intro__content">
              <p className="intro__timezone">{name}</p>
              <hr />
              <p className="intro__title">
                Temperature
                <span>{card.temp}</span>
              </p>
              <p className="intro__title">
                Feels like
                <span>{card.feels}</span>
              </p>
              <p className="intro__title">
                Min temperature
                <span>{card.tempMin}</span>
              </p>
              <p className="intro__title">
                Max temperature
                <span>{card.tempMax}</span>
              </p>
              <p className="intro__title">
                Humidity
                <span>{card.humidity}</span>
              </p>
              <p className="intro__title">
                Pressure
                <span>{card.pressure}</span>
              </p>
              <p className="intro__title">
                Sunrise
                <span>
                  {getDay(card.sunrise)}
                  {' '}
                  a.m.
                </span>
              </p>
              <p className="intro__title">
                Sunset
                <span>
                  {getDay(card.sunset)}
                  {' '}
                  p.m.
                </span>
              </p>
              <p className="intro__title">
                Country
                <span>{card.country}</span>
              </p>
              <p className="intro__title">
                Timezone id
                <span>{card.id}</span>
              </p>

            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
