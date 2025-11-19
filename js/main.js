import { renderPhotos } from './render-cards.js';
import { renderError } from './util.js';
import { getData } from './api.js';
import './form.js';

getData()
  .then((photos) => {
    renderPhotos(photos);
    // подключение фильтров после подгрузки данных
  })
  .catch(() => {
    renderError();
  });
