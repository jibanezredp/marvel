import _ from 'lodash';
import { fetchJSON, urlParams } from '../helpers';

/*
 * action types
 */

export const REQUEST_HEROES = 'REQUEST_HEROES';
export const RECEIVE_HEROES = 'RECEIVE_HEROES';
export const REQUEST_HERO = 'REQUEST_HERO';
export const RECEIVE_HERO = 'RECEIVE_HERO';

/*
 * action creators
 */

export const requestHeroes = () => ({
  type: REQUEST_HEROES,
});

export const receiveHeroes = (json) => ({
  type: RECEIVE_HEROES,
  heroes: _.keyBy(json.data.results, o => o.id),
});

export const fetchHeroes = () => (
  (dispatch) => {
    dispatch(requestHeroes());
    fetchJSON(`http://gateway.marvel.com/v1/public/characters${urlParams()}`)
      .then(res => dispatch(receiveHeroes(res)));
  }
);

export const requestHero = () => ({
  type: REQUEST_HERO,
});

export const receiveHero = (json) => ({
  type: RECEIVE_HERO,
  hero: _.keyBy(json, o => o.id),
});

export const fetchHero = (id) => (
  (dispatch) => {
    dispatch(requestHero());
    fetchJSON(`http://gateway.marvel.com/v1/public/characters/${id}${urlParams()}`)
      .then(res => dispatch(receiveHero(res)));
  }
);
