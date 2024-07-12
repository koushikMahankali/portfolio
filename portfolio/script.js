document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form
    const contactForm = document.querySelector('form');

    // Add event listener to the form
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display form values in console (for testing purposes)
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Reset the form
        contactForm.reset();
    });
});