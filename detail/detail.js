import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

let dog = {};

// on load
window.addEventListener('load', async () => {
    const dogResponse = await getDog(1);
    dog = dogResponse;

    console.log('dog', dog);

    displayDog();
});

// get the id from URL
// use the id to fetch the dog

function displayDog() {
    // render and append this dog's details to the container
}

displayDog();
