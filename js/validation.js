import { HASHTAG, MAX_DESCRIPTION_LENGTH, MAX_HASHTAG_AMOUNT } from './constants.js';

const formNode = document.querySelector('.img-upload__form');
const descriptionNode = document.querySelector('.text__description');
const hashtagNode = document.querySelector('.text__hashtags');

const validation = new Pristine(formNode, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const checkDescription = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

const getHashtags = (text) => text.toLowerCase().split(' ').filter((item) => item.length);

const checkHashtags = (value) => {
  if(!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((hashtag) => HASHTAG.test(hashtag));
};

const checkAmount = (value) => {
  if(!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= MAX_HASHTAG_AMOUNT;
};

const isUnique = (value) => {
  if(!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  const unique = [...new Set(hashtags)];
  return hashtags.length === unique.length;
};

validation.addValidator(
  descriptionNode,
  checkDescription,
  `Длина поля не должна превышать ${MAX_DESCRIPTION_LENGTH} символов`
);

validation.addValidator(
  hashtagNode,
  checkHashtags,
  `хэштег начинается с символа # (решётка);
строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
хеш-тег не может состоять только из одной решётки;
максимальная длина одного хэштега 20 символов, включая решётку;`
);

validation.addValidator(
  hashtagNode,
  checkAmount,
  `Допустимо не более ${MAX_HASHTAG_AMOUNT} хэштэгов`
);

validation.addValidator(
  hashtagNode,
  isUnique,
  'Хэштэги должны быть уникальны'
);

export const isValid = () => validation.validate();

export const resetValidation = () => {
  validation.reset();
};
