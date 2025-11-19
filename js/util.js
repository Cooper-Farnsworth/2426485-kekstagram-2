import { TIMEOUT } from './constants.js';

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const showModal = (modal, isShown = true) => {
  if(isShown) {
    modal.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

export const renderError = () => {
  const newAlert = dataErrorTemplate.cloneNode(true);
  body.append(newAlert);
  setTimeout(() => {
    newAlert.remove();
  }, TIMEOUT);
};
