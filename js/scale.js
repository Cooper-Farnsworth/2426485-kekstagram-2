import { Scale } from './constants.js';

const minusNode = document.querySelector('.scale__control--smaller');
const plusNode = document.querySelector('.scale__control--bigger');
const valueNode = document.querySelector('.scale__control--value');
const imagePreviewNode = document.querySelector('.img-upload__preview img');

let currentScale = Scale.DEFAULT;

const render = () => {
  valueNode.value = `${currentScale}%`;
  imagePreviewNode.style.transform = `scale(${currentScale}%)`;
};

minusNode.addEventListener('click', () => {
  currentScale = Math.max(currentScale - Scale.STEP, Scale.MIN);
  render();
});

plusNode.addEventListener('click', () => {
  currentScale = Math.min(currentScale + Scale.STEP, Scale.MAX);
  render();
});

export const resetScale = () => {
  currentScale = Scale.DEFAULT;
  render();
};

resetScale();
