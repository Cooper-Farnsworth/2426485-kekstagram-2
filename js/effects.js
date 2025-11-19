import { EFFECTS, EffectSettings, INIT_SLIDER } from './constants.js';

const sliderNode = document.querySelector('.effect-level__slider');
const radiosListNode = document.querySelector('.effects__list');
const effectValueNode = document.querySelector('.effect-level__value');
const previewNode = document.querySelector('.img-upload__preview img');
const sliderContainerNode = document.querySelector('.effect-level');

let currentEffect = EFFECTS.NONE;

const isDefault = () => currentEffect === EFFECTS.NONE;

noUiSlider.create(sliderNode, INIT_SLIDER);

const renderPreview = () => {
  if(isDefault()) {
    previewNode.style.filter = '';
  } else {
    const {style, units} = EffectSettings[currentEffect];
    previewNode.style.filter = `${style}(${effectValueNode.value}${units})`;
  }
};

sliderNode.noUiSlider.on('update', () => {
  effectValueNode.value = sliderNode.noUiSlider.get();
  renderPreview();
});

const updateSlider = () => {
  const {range, start, step} = EffectSettings[currentEffect];
  sliderContainerNode.classList.remove('hidden');
  sliderNode.noUiSlider.updateOptions({range, start, step});
};

export const resetEffects = () => {
  sliderContainerNode.classList.add('hidden');
  currentEffect = EFFECTS.NONE;
  renderPreview();
};

radiosListNode.addEventListener('change', ({target}) => {
  currentEffect = target.value;
  if(isDefault()) {
    resetEffects();
  } else {
    updateSlider();
  }
});

resetEffects();
