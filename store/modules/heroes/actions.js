export function getHeroes(limit) {
  return {
    type: 'GET_HEROES',
    payload: { limit },
  };
}

export function setHeroes(heroes) {
  return {
    type: 'SET_HEROES',
    heroes,
  };
}

export function setCurrentLimit(currentLimit) {
  return {
    type: 'SET_CURRENT_LIMIT',
    currentLimit,
  };
}

export function setCurrentHero(hero) {
  return {
    type: 'SET_CURRENT_HERO',
    hero,
  };
}
