document.getElementById('application-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission

    document.getElementById('responseMessage').textContent = "";
    document.getElementById('errorMessage').textContent = "";

    const form = event.target;

    // Create a FormData object from the form
    const formData = new FormData(form);

    try {
        // Send the form data to the server
        const response = await fetch('apply.php', {
            method: 'POST',
            body: formData,
        });

        // Check if the request was successful
        if (response.ok) {
            const result = await response.text();
            document.getElementById('responseMessage').textContent = result;
            form.reset();
        } else {
            document.getElementById('errorMessage').textContent = 'Failed to submit the application.';
            console.log(response);
        }
    } catch (error) {
        document.getElementById('errorMessage').textContent = 'An error occurred: ' + error.message;
    }
});