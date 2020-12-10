import produce from 'immer';

const INITIAL_STATE = {
  heroes: [],
  currentLimit: 25,
  currentHero: {},
};

export default function heroes(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SET_HEROES': {
        draft.heroes = action.heroes;
        break;
      }

      case 'SET_CURRENT_LIMIT': {
        draft.currentLimit = action.currentLimit;
        break;
      }

      case 'SET_CURRENT_HERO': {
        draft.currentHero = action.hero;
        break;
      }

      default:
    }
  });
}
