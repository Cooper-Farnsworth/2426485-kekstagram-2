const bigPictureNode = document.querySelector('.big-picture');
const pictureCancelNode = document.querySelector('#picture-cancel');
const imageNode = bigPictureNode.querySelector('.big-picture__img img');
const captionNode = bigPictureNode.querySelector('.social__caption');
const likesNode = bigPictureNode.querySelector('.likes-count');
const totalCommentsNode = bigPictureNode.querySelector('.social__comment-total-count');
const socialCommentsNode = bigPictureNode.querySelector('.social__comments');
const shownCommentsNode = bigPictureNode.querySelector('.social__comment-shown-count');
const commentsLoaderNode = bigPictureNode.querySelector('.social__comments-loader');

const socialCommentTemplate = bigPictureNode.querySelector('.social__comment');

let localComments;
let alreadyRenderedComments;

const renderStatistic = () => {
  shownCommentsNode.textContent = alreadyRenderedComments;
};

const renderLoaderButton = () => {
  if(localComments.length) {
    commentsLoaderNode.classList.remove('hidden');
  } else {
    commentsLoaderNode.classList.add('hidden');
  }
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComments.splice(0, 5).forEach(({avatar, message, name}) => {
    const newComment = socialCommentTemplate.cloneNode(true);
    const image = newComment.querySelector('.social__picture');
    image.src = avatar;
    image.alt = name;
    newComment.querySelector('.social__text').textContent = message;
    fragment.append(newComment);
    alreadyRenderedComments++;
  });
  socialCommentsNode.append(fragment);
  renderStatistic();
  renderLoaderButton();
};

export const openModal = ({url, description, comments, likes}) => {
  bigPictureNode.classList.remove('hidden');
  imageNode.src = url;
  imageNode.alt = description;
  captionNode.textContent = description;
  likesNode.textContent = likes;
  totalCommentsNode.textContent = comments.length;
  socialCommentsNode.innerHTML = '';

  localComments = [...comments];
  alreadyRenderedComments = 0;
  renderComments();
};

const closeModal = () => {
  bigPictureNode.classList.add('hidden');
};

pictureCancelNode.addEventListener('click', () => {
  closeModal();
});

commentsLoaderNode.addEventListener('click', () => {
  renderComments();
});
