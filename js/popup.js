import { POPUPS } from './constants.js';

const bodyNode = document.body;
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const templates = {
  [POPUPS.SUCCESS] : successTemplate,
  [POPUPS.ERROR] : errorTemplate
};

export const renderPopup = (type) => {
  const popup = templates[type].cloneNode(true);
  bodyNode.append(popup);
  popup.addEventListener('click', ({target}) => {
    if(target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      popup.remove();
    }
  });
};
