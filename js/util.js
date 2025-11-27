import { TIMEOUT } from './constants.js';

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;

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

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
