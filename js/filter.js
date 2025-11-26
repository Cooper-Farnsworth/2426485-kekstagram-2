import { FILTERS, RANDOM_COUNT } from './constants.js';
import { renderPhotos } from './render-cards.js';
import { debounce } from './util.js';

const filtersNode = document.querySelector('.img-filters');
const filtersFormNode = document.querySelector('.img-filters__form');
let localPhotos;
let currentFilter;

const debouncedRender = debounce(renderPhotos);

export const showFilters = (photos) => {
  localPhotos = [...photos];
  filtersNode.classList.remove('img-filters--inactive');
};

const setActiveButton = (clickedButton) => {
  filtersFormNode.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  clickedButton.classList.add('img-filters__button--active');
};

const filterActions = {
  [FILTERS.DEFAULT]: () => localPhotos,
  [FILTERS.RANDOM]: () => [...localPhotos].sort(() => Math.random() - 0.5).slice(0, RANDOM_COUNT),
  [FILTERS.DISCUSSED]: () => [...localPhotos].sort((a, b) => b.comments.length - a.comments.length)
};

filtersFormNode.addEventListener('click', ({target}) => {
  const filter = target.closest('.img-filters__button');
  if (filter) {
    currentFilter = filter.id;
    setActiveButton(filter);
    debouncedRender(filterActions[currentFilter]());
  }
});
