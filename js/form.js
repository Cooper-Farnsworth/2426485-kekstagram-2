import './validation.js';
import { isValid, resetValidation } from './validation.js';

const formNode = document.querySelector('.img-upload__form');

const uploadFileNode = formNode.querySelector('#upload-file');
const uploadModalNode = formNode.querySelector('.img-upload__overlay');
const imagePreviewNode = formNode.querySelector('.img-upload__preview img');
const closeModalNode = formNode.querySelector('#upload-cancel');


const openFormModal = () => {
  uploadModalNode.classList.remove('hidden');
};

const closeFormModal = () => {
  uploadModalNode.classList.add('hidden');
  formNode.reset();
  resetValidation();
};

const renderPreview = () => {
  const file = uploadFileNode.files[0];
  const fileUrl = URL.createObjectURL(file);
  imagePreviewNode.src = fileUrl;
};

uploadFileNode.addEventListener('change', () => {
  openFormModal();
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
