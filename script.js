// Ensure the script runs after the DOM is fully loaded
window.onload = function() {
    // Get references to the DOM elements
    const emailInput = document.getElementById('emailInput');
    const codeInput = document.getElementById('invitationCode');
    const submitButton = document.getElementById('submitCode');
    const formContent = document.getElementById('jotformContent');
    const errorMessage = document.getElementById('errorMessage');

    // Initially hide the form content (redundant if done in CSS, but good for robustness)
    formContent.style.display = 'none';
    errorMessage.style.display = 'none'; // Ensure error message is hidden on load

    // Add event listener to the submit button
    submitButton.addEventListener('click', () => {
        const enteredEmail = emailInput.value.trim().toLowerCase(); // Get email, trim whitespace, convert to lowercase
        const enteredCode = codeInput.value.trim(); // Get code, trim whitespace

        // Get the first letter of the email
        const firstLetter = enteredEmail.charAt(0);

        // Flag to track if access is granted
        let accessGranted = false;

        // --- Define your email range and code mappings here ---
        // Example 1: Emails starting with A-H require code '1234'
        if (firstLetter >= 'a' && firstLetter <= 'h') {
            if (enteredCode === '1234') {
                accessGranted = true;
            }
        }
        // Example 2: Emails starting with I-P require code '5678'
        else if (firstLetter >= 'i' && firstLetter <= 'p') {
            if (enteredCode === '5678') {
                accessGranted = true;
            }
        }
        // Example 3: Emails starting with Q-Z require code '9012'
        else if (firstLetter >= 'q' && firstLetter <= 'z') {
            if (enteredCode === '9012') {
                accessGranted = true;
            }
        }
        // Add more conditions as needed for different ranges and codes

        // Handle access based on the flag
        if (accessGranted) {
            formContent.style.display = 'block'; // Show the form content
            errorMessage.style.display = 'none'; // Hide any error messages
            // Optionally, you can hide the invitation section after success
            document.getElementById('widget-container').querySelector('h2').style.display = 'none';
            document.getElementById('widget-container').querySelector('.space-y-4').style.display = 'none';
        } else {
            errorMessage.textContent = 'Invalid email or invitation code. Please check your details.';
            errorMessage.style.display = 'block'; // Show the error message
        }
    });
};
