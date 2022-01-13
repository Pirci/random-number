// Create variable and DOM
const generateBtn = document.querySelector('.generateBtn');

// Button click event listener
generateBtn.addEventListener('click', generateRandomNum);

function generateRandomNum() {
	const fromNum = document.querySelector('.fromNum').value;
	const toNum = document.querySelector('.toNum').value;

	// Create number number between given numbers
	randomNum = Math.floor(Math.random() * parseInt(toNum));

	if (randomNum >= parseInt(fromNum)) {
		const randomNumEl = document.querySelector('.randomNumEl');
		randomNumEl.innerHTML = randomNum;
	}
}
