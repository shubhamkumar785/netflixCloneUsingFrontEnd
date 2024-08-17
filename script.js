document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const searchInput = document.getElementById('search-input');
    const getStartedButton = document.querySelector('.btn.btn-red');
    const signInButton = document.querySelector('.btn.btn-red-sm');

    // Validate email function
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    // Event listener for Get Started button
    getStartedButton.addEventListener('click', () => {
        const email = searchInput.value.trim();
        if (email) {
            if (validateEmail(email)) {
                alert(`Getting started with email: ${email}`);
                // Add further logic here, such as form submission or API call
            } else {
                alert('Please enter a valid email address');
            }
        } else {
            alert('Please enter an email address');
        }
    });

    // Event listener for Sign In button
    signInButton.addEventListener('click', () => {
        alert('Redirecting to sign-in page...');
        // Add further logic here, such as redirection to sign-in page
    });
});
