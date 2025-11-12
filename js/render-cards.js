import { openModal } from './modal-window.js';

const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainerNode = document.querySelector('.pictures');

export const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach(({url, description, comments, likes}) => {
    const newCard = cardTemplate.cloneNode(true);
    const image = newCard.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    newCard.querySelector('.picture__comments').textContent = comments.length;
    newCard.querySelector('.picture__likes').textContent = likes;
    newCard.addEventListener('click', () => {
      openModal({url, description, comments, likes});
    });
    fragment.append(newCard);
  });
  picturesContainerNode.append(fragment);
};
