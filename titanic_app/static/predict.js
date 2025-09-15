document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all the elements we need to work with
    const predictionForm = document.querySelector('.prediction-form');
    if (!predictionForm) return; // Exit if the form isn't on the page

    const allInputs = predictionForm.querySelectorAll('input, select');
    const submitButton = predictionForm.querySelector('button[type="submit"]');

    /**
     * Checks the validity of all form inputs and enables/disables the
     * submit button accordingly.
     */
    const validateForm = () => {
        // The form is valid if EVERY input is valid
        const isFormValid = Array.from(allInputs).every(input => input.validity.valid);
        submitButton.disabled = !isFormValid;
    };

    // 2. Add an event listener to each input field
    allInputs.forEach(input => {
        // The 'input' event fires every time the value changes
        input.addEventListener('input', () => {
            // Give real-time visual feedback for the specific input
            if (input.validity.valid) {
                input.closest('.form-group').classList.remove('invalid');
            } else {
                input.closest('.form-grop').classList.add('invalid');
            }
            // Re-validate the entire form to check the submit button state
            validateForm();
        });
    });

    // 3. Run the validation once on page load
    // This ensures the button is disabled from the start.
    validateForm();
});