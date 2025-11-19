import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { showModal } from './util.js';

const formNode = document.querySelector('.img-upload__form');
const uploadFileNode = formNode.querySelector('#upload-file');
const uploadModalNode = formNode.querySelector('.img-upload__overlay');
const imagePreviewNode = formNode.querySelector('.img-upload__preview img');
const closeModalNode = formNode.querySelector('#upload-cancel');

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

formNode.addEventListener('submit', (evt) => {
  if(!isValid()) {
    evt.preventDefault();
  }
});
