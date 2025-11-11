import { generateStructure } from './data.js';
import { renderPhotos } from './render-cards.js';

const data = generateStructure();
renderPhotos(data);
