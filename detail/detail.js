import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

let dog = {};

// on load
window.addEventListener('load', async () => {
    // get the id from URL
    const currentURLData = new URLSearchParams(window.location.search);
    console.log('currentURLData', currentURLData);

    // use the id to fetch the dog
    const id = currentURLData.get('id');
    console.log('id', id);

    const dogData = await getDog(id);
    dog = dogData;

    console.log('dog', dog);

    displayDog();
});

function displayDog() {
    // render and append this dog's details to the container
    dogDetailContainer.textContent = '';

    dogDetailContainer.append(renderDogDetail(dog));
}

displayDog();
