import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

let dogs = [];

// on load
// fetch all dogs
window.addEventListener('load', async () => {
    const response = await getDogs();
    dogs = response;
    console.log(response);
    displayDogs();
});

// render and append all dog cards to the container
function displayDogs() {
    dogListContainer.textContent = '';

    dogs.forEach((dog) => {
        const dogEl = renderDogCard(dog);
        dogListContainer.append(dogEl);
    });
}

displayDogs();
