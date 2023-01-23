import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

let dogs = [];

// on load

window.addEventListener('load', async () => {
    const response = await getDogs();
    dogs = response;
    console.log(response);
});
// fetch all dogs
// render and append all dog cards to the container
