// Get references to DOM elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const form = document.querySelector('form');

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the values from the form inputs
    const name = nameInput.value;
    const email = emailInput.value;

    // Display a confirmation message
    alert(`Thank you, ${name}! We've received your email address: ${email}`);

    // Clear the form inputs
    nameInput.value = '';
    emailInput.value = '';
}

// Attach a submit event listener to the form
form.addEventListener('submit', handleSubmit);
