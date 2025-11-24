export const MAX_HASHTAG_AMOUNT = 5;
export const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100,
};

export const TIMEOUT = 5000;

export const POPUPS = {
  ERROR: 'error',
  SUCCESS: 'success'
};

export const SUBMIT__TEXT = {
  IDLE: 'Опубликовать',
  SENDING: 'Отправляю...'
};

export const MAX_DESCRIPTION_LENGTH = 140;
export const HASHTAG = /^#[ёа-яa-z0-9]{1,19}$/i;

export const EFFECTS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

export const EffectSettings = {
  [EFFECTS.CHROME]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    style: 'grayscale',
    units: ''
  },

  [EFFECTS.NONE]: { //будет очищено, параметры не важны
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    style: '',
    units: ''
  },

  [EFFECTS.SEPIA]: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    style: 'sepia',
    units: ''
  },

  [EFFECTS.MARVIN]: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    style: 'invert',
    units: '%'
  },

  [EFFECTS.PHOBOS]: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    style: 'blur',
    units: 'px'
  },

  [EFFECTS.HEAT]: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    style: 'brightness',
    units: ''
  },
};


export const INIT_SLIDER = {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower',
  format: {
    to: function (value) {
      return parseFloat(value);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
};

export const FILTERS = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};
