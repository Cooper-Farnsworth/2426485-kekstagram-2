const PHOTOS_AMOUNT = 25;

const DESCRIPTIONS = [
  "описание 1",
  "описание 2",
  "описание 3",
  "описание 4",
  "описание 5",
  "описание 6",
  "описание 7",
  "описание 8",
  "описание 9",
  "описание 10",
];

const NAMES = [
  'Анна',
  'Максим',
  'Елена',
  'Иван',
  'Ольга',
  'Артем',
  'Дарья',
  'Алексей',
  'София',
  'Николай'
];

// Определяем массив возможных сообщений для комментариев
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


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
  // const photos = [];
  // for (let i = 1; i <= PHOTOS_AMOUNT; i++) {
  //   photos.push(generatePhoto(i));
  // }

  const photos = Array.from({ length: PHOTOS_AMOUNT }, (_, index) => generatePhoto(index));
  return photos;
};


console.log(generateStructure());
