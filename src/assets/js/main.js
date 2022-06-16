// import helper-functions
import { loadImage, loadImages } from './helpers.js';


// Load one image with async/await function 'loadImage' (with Promise) 
const image = await loadImage('../src/assets/img/berlin.jpg');

console.log(`This single image was loaded successfully: ${image}`);


// Load multiple images with async/await function 'loadImages' (with Promises) 
const images = await loadImages(['../src/assets/img/berlin.jpg', 
                                 '../src/assets/img/london.jpg', 
                                 '../src/assets/img/paris.jpg']);                               

console.log(`This array with images was loaded successfully, items1 ${images[0]} 
                                                             items2 ${images[1]}
                                                             items3 ${images[2]}`);

document.body.appendChild(image);                                                             