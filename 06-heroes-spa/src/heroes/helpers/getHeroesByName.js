import { heroes } from '../data';

export const getHeroesByName = (name = '') => {
  name = name.toLowerCase().trim();

  if (!name.length) {
    return [];
  }

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
