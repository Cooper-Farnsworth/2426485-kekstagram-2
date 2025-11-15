import { generateStructure } from './data.js';
import { renderPhotos } from './render-cards.js';
import './form.js';

const data = generateStructure();
renderPhotos(data);
