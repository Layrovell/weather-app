/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { usePrevious } from 'react-hanger';
import { fetchWeather, addLocation } from '../../Api/api';
import './FindLocation.scss';

export const FindLocation = ({ onAddNewLocation }) => {
  const [query, setQuery] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [err, setErr] = useState(false);
  const prevQuery = usePrevious(query);

  useEffect(() => {
    if (!query) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }

    if (query !== prevQuery) {
      setErr(false);
    }
  }, [query]);

  const search = (e) => {
    e.preventDefault();
    if (!query) {
      return;
    }

    fetchWeather(query)
      .then(res => addLocation(res, onAddNewLocation, setQuery))
      .catch((error) => {
        console.log(error);
        setErr(true);
      });
  };

  return (
    <section className="search__box">
      <form className="wrapper is-flex is-relative" onSubmit={search}>
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          className={`input mr-4 ${err ? 'is-danger' : 'is-link'}`}
          type="text"
          name="input"
          placeholder="Type your city"
        />
        {err ? (
          <p className="help is-danger is-absolute">
            Can&apos;t find a city
          </p>
        ) : ''}
        <button
          disabled={buttonDisabled}
          onClick={search}
          type="button"
          className="button is-link"
        >
          Add
        </button>
      </form>
    </section>
  );
};
