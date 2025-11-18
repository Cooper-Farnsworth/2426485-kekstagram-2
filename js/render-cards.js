import { openModal } from './modal-window.js';

const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainerNode = document.querySelector('.pictures');

let localPhotos;

export const renderPhotos = (photos) => {
  localPhotos = [...photos];
  const fragment = document.createDocumentFragment();
  photos.forEach(({url, description, comments, likes, id}) => {
    const newCard = cardTemplate.cloneNode(true);
    const image = newCard.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    newCard.querySelector('.picture__comments').textContent = comments.length;
    newCard.querySelector('.picture__likes').textContent = likes;
    newCard.dataset.cardId = id;
    fragment.append(newCard);
  });
  picturesContainerNode.append(fragment);
};

picturesContainerNode.addEventListener('click', ({target}) => {
  const card = target.closest('.picture');
  if(card) {
    const id = Number(card.dataset.cardId);
    const photo = localPhotos.find((item) => item.id === id);
    openModal(photo);
  }
});
