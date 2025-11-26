import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { showModal } from './util.js';
import { renderPopup } from './popup.js';
import { POPUPS, SUBMIT__TEXT } from './constants.js';
import { removeEscapeListener, setEscapeListener } from './escape-close-modal.js';
import { postData } from './api.js';

const formNode = document.querySelector('.img-upload__form');
const uploadFileNode = formNode.querySelector('#upload-file');
const uploadModalNode = formNode.querySelector('.img-upload__overlay');
const imagePreviewNode = formNode.querySelector('.img-upload__preview img');
const closeModalNode = formNode.querySelector('#upload-cancel');
const submitButtonNode = formNode.querySelector('#upload-submit');
const descriptionNode = document.querySelector('.text__description');
const hashtagNode = document.querySelector('.text__hashtags');
const radioPreviewsNodes = document.querySelectorAll('.effects__preview');

const closeFormModal = () => {
  showModal(uploadModalNode, false);
  formNode.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

const checkClosePossibility = () => !(document.activeElement === hashtagNode || document.activeElement === descriptionNode);

const renderPreview = () => {
  const file = uploadFileNode.files[0];
  const fileUrl = URL.createObjectURL(file);
  imagePreviewNode.src = fileUrl;
  radioPreviewsNodes.forEach((span) => {
    span.style.backgroundImage = `url(${fileUrl})`;
  });
};

uploadFileNode.addEventListener('change', () => {
  showModal(uploadModalNode);
  renderPreview();
  setEscapeListener(closeFormModal, checkClosePossibility);
});

closeModalNode.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeFormModal();
  removeEscapeListener();
});

const blockSubmitButton = (isBlocked = true) => {
  submitButtonNode.disabled = isBlocked;
  submitButtonNode.textContent = isBlocked ? SUBMIT__TEXT.SENDING : SUBMIT__TEXT.IDLE;
};

formNode.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    blockSubmitButton();
    postData(new FormData(formNode))
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
