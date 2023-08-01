// Lowercase letters
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Uppercase letters
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Numbers
const numbers = '0123456789'.split('');

// Symbols
const symbols = '!@#$%^&*()-_=+[]{}|;:\'",.<>/?'.split('');

// Save the input elements in variables
const lengthInput = document.getElementById('length');
const upperCheckbox = document.getElementById('upper');
const lowerCheckbox = document.getElementById('lower');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const textToCopy = document.getElementById('contentToCopy');
lengthInput.addEventListener('input', () => {
	// Update the passwordLength value
	passwordLength = lengthInput.value;

	// Update the passwordDisplay element
	textToCopy.innerText = generatePassword();
});
const generatePassword = () => {
	// Create an empty array
	let generatedPassword = [];

	// Add the selected characters to the array
	if (upperCheckbox.checked) {
		generatedPassword = generatedPassword.concat(uppercaseLetters);
	}
	if (lowerCheckbox.checked) {
		generatedPassword = generatedPassword.concat(lowercaseLetters);
	}
	if (numbersCheckbox.checked) {
		generatedPassword = generatedPassword.concat(numbers);
	}
	if (symbolsCheckbox.checked) {
		generatedPassword = generatedPassword.concat(symbols);
	}

	// Create an empty string
	let password = '';

	// Loop through the generatedPassword array
	for (let i = 0; i < passwordLength; i++) {
		// Get a random character from the generatedPassword array
		const randomCharacter =
			generatedPassword[Math.floor(Math.random() * generatedPassword.length)];

		// Add the random character to the password string
		password += randomCharacter;
	}

	// Return the password
	return password;
};
// Use ES6 arrow function and const
document.getElementById('copyBtn').addEventListener('click', async () => {
	// Get the text from the contentToCopy element

	try {
		// Use the navigator.clipboard API to copy the text to the clipboard
		await navigator.clipboard.writeText(textToCopy.value);

		// Provide some visual feedback to the user using template literals
		const copyBtn = document.getElementById('copyBtn');
		alert(`Copied ${textToCopy} to clipboard!`);
	} catch (error) {
		// Handle any errors
		console.error(error);
	}
});
