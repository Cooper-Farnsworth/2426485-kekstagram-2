import { DESCRIPTIONS, MESSAGES, NAMES, PHOTOS_AMOUNT } from './constants.js';


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const generateSingleComment = () => ({
  id: getRandomInteger(10000, 1000000),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const generateComments = () => {
  const amount = getRandomInteger(0, 30);
  const comments = [];
  for (let i = 1; i <= amount; i++) {
    comments.push(generateSingleComment());
  }
  return comments;
};

const generatePhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: generateComments(),
});

const generateStructure = () => {
  const photos = Array.from({ length: PHOTOS_AMOUNT }, (_, index) => generatePhoto(index));
  return photos;
};

export {generateStructure};
