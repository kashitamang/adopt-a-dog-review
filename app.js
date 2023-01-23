import { getDogs, getDog } from './fetch-utils.js';
import { renderDogCard, renderDogDetail } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

let dogs = [];

// on load
// fetch all dogs
window.addEventListener('load', async () => {
    const dogsResponse = await getDogs();
    dogs = dogsResponse;

    console.log('dogs', dogs);

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
