// https://placeiRyS.com/
const imageContainer = document.querySelector('#image-container');
const body = document.querySelector('body');

/* Write a function that will display any Keanu image  */
function plushieiRyS() {
	clearContainer();
	body.classList = "Plushie";
	let newImage = document.createElement('img');
	newImage.src = "irys_plushie.jpeg";
	imageContainer.appendChild(newImage);
}

/* Write a function that will display an image of young Keanu */
function versionOneiRyS() {
	clearContainer();
	body.classList = "1.0";
	let newImage = document.createElement('img');
	newImage.src = "irys_V_One.png";
	imageContainer.appendChild(newImage);
}

/* Write a function that will display an image of grey Keanu */
function versionTwoiRyS() {
	clearContainer();
	body.classList = "2.0";
	let newImage = document.createElement('img');
	newImage.src = "irys_V_Two.png";
	imageContainer.appendChild(newImage);
}

/* Write a function that will clear the image container  */
function clearContainer() {
	while (imageContainer.firstChild) {             
    imageContainer.removeChild(imageContainer.firstChild);
	}
}