// Use ES6 arrow function and const
document.getElementById('copyBtn').addEventListener('click', async () => {
	// Get the text from the contentToCopy element
	const textToCopy = document.getElementById('contentToCopy').innerText;

	try {
		// Use the navigator.clipboard API to copy the text to the clipboard
		await navigator.clipboard.writeText(textToCopy);

		// Provide some visual feedback to the user using template literals
		const copyBtn = document.getElementById('copyBtn');
		alert(`Copied ${textToCopy} to clipboard!`);
	} catch (error) {
		// Handle any errors
		console.error(error);
	}
});
