// https://placekeanu.com/
const imageContainer = document.querySelector('#image-container');
const body = document.querySelector('body');

/* Write a function that will display any Keanu image  */
function anyKeanu() {
	clearContainer();
	body.classList = "any";
	let newImage = document.createElement('img');
	newImage.src = "https://placekeanu.com/200/200";
	imageContainer.appendChild(newImage);
}

/* Write a function that will display an image of young Keanu */
function youngKeanu() {
	clearContainer();
	body.classList = "young";
	let newImage = document.createElement('img');
	newImage.src = "https://placekeanu.com/200/200/y";
	imageContainer.appendChild(newImage);
}

/* Write a function that will display an image of grey Keanu */
function greyKeanu() {
	clearContainer();
	body.classList = "grey";
	let newImage = document.createElement('img');
	newImage.src = "https://placekeanu.com/200/200/g";
	imageContainer.appendChild(newImage);
}

/* Write a function that will clear the image container  */
function clearContainer() {
	while (imageContainer.firstChild) {             
    imageContainer.removeChild(imageContainer.firstChild);
	}
}