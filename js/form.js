import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { showModal } from './util.js';
import { renderPopup } from './popup.js';
import { POPUPS, SUBMIT__TEXT } from './constants.js';

const formNode = document.querySelector('.img-upload__form');
const uploadFileNode = formNode.querySelector('#upload-file');
const uploadModalNode = formNode.querySelector('.img-upload__overlay');
const imagePreviewNode = formNode.querySelector('.img-upload__preview img');
const closeModalNode = formNode.querySelector('#upload-cancel');
const submitButtonNode = formNode.querySelector('#upload-submit');

const closeFormModal = () => {
  showModal(uploadModalNode, false);
  formNode.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

const renderPreview = () => {
  const file = uploadFileNode.files[0];
  const fileUrl = URL.createObjectURL(file);
  imagePreviewNode.src = fileUrl;
};

uploadFileNode.addEventListener('change', () => {
  showModal(uploadModalNode);
  renderPreview();
});

closeModalNode.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeFormModal();
});

const blockSubmitButton = (isBlocked = true) => {
  submitButtonNode.disabled = isBlocked;
  submitButtonNode.textContent = isBlocked ? SUBMIT__TEXT.SENDING : SUBMIT__TEXT.IDLE;
};

formNode.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    blockSubmitButton();
    fetch('https://31.javascript.htmlacademy.pro/kekstagram/', {
      method: 'post',
      body: new FormData(formNode)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        closeFormModal();
        renderPopup(POPUPS.SUCCESS);
      })
      .finally(() => {
        blockSubmitButton(false);
      })
      .catch(() => {
        renderPopup(POPUPS.ERROR);
      });
  }
});
