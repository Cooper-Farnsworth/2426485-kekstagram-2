import { EFFECTS, EffectSettings } from './constants.js';

const sliderNode = document.querySelector('.effect-level__slider');
const radiosListNode = document.querySelector('.effects__list');
const effectValueNode = document.querySelector('.effect-level__value');
const previewNode = document.querySelector('.img-upload__preview img');

let currentEffect = EFFECTS.NONE;

noUiSlider.create(sliderNode, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower',
});

const renderPreview = () => {
  const {style, units} = EffectSettings[currentEffect];
  previewNode.style.filter = `${style}(${effectValueNode.value}${units})`;
};

sliderNode.noUiSlider.on('update', () => {
  effectValueNode.value = sliderNode.noUiSlider.get();
  renderPreview();
});

const updateSlider = () => {
  const {range, start, step} = EffectSettings[currentEffect];
  sliderNode.noUiSlider.updateOptions({range, start, step});
};

radiosListNode.addEventListener('change', ({target}) => {
  currentEffect = target.value;
  updateSlider();
});


/*
sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});
*/
