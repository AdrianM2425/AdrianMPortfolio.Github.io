// https://placeiRyS.com/
const imageContainer = document.querySelector('#image-container');
const body = document.querySelector('body');

/* Write a function that will display any Keanu image  */
function plushieiRyS() {
	clearContainer();
	body.classList = "Plushie";
	let newImage = document.createElement('img');
	newImage.src = "irys_plushie.jpg";
	newImage.width = 300;
	newImage.height = 300;
	newImage.style.display = 'block';
	newImage.style.margin = '0 auto';
	imageContainer.appendChild(newImage);
}

/* Write a function that will display an image of young Keanu */
function versionOneiRyS() {
	clearContainer();
	body.classList = "VOne";
	let newImage = document.createElement('img');
	newImage.src = "irys_V_One.png";
	newImage.width = 190;
	newImage.height = 300;
	newImage.style.display = 'block';
	newImage.style.margin = '0 auto';
	imageContainer.appendChild(newImage);
}

/* Write a function that will display an image of grey Keanu */
function versionTwoiRyS() {
	clearContainer();
	body.classList = "VTwo";
	let newImage = document.createElement('img');
	newImage.src = "irys_V_Two.png";
	newImage.width = 200;
	newImage.height = 300;
	newImage.style.display = 'block';
	newImage.style.margin = '0 auto';
	imageContainer.appendChild(newImage);
}

/* Write a function that will clear the image container  */
function clearContainer() {
	while (imageContainer.firstChild) {             
    imageContainer.removeChild(imageContainer.firstChild);
	}
}