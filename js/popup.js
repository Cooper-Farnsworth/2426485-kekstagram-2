import { POPUPS } from './constants.js';
import { removeEscapeListener, setEscapeListener } from './escape-close-modal.js';

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
  setEscapeListener(() => {
    popup.remove();
  });
  popup.addEventListener('click', ({target}) => {
    if(target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      popup.remove();
      removeEscapeListener();
    }
  });
};
