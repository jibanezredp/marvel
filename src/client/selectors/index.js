import { createSelector } from 'reselect';

const getHeroes = state => state.heroes;

export const getProps = createSelector(
  getHeroes,
  (heroes) => ({ heroes }),
);
