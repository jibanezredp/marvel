import _ from 'lodash';
import * as hero from '../actions/heroes';

const initialState = {
  heroes: {},
};

function heroes(state = {}, action) {
  switch (action.type) {
  case hero.REQUEST_HEROES:
    return {
      ...state,
    };
  default:
    return state;
  }
}

function rootReducer(state = initialState, action) {
  return {
    heroes: heroes(state.heroes, action),
  };
}

export default rootReducer;
