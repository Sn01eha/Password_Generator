document.getElementById('generateBtn').addEventListener('click', async () => {
    const length = document.getElementById('length').value;

    try {
        const response = await fetch(`http://localhost:3000/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ length: parseInt(length) }),
        });

        // Always attempt to parse the JSON response
        const data = await response.json();

        // Check if the response was NOT ok (e.g., status 400)
        if (!response.ok) {
            // Throw an error with the specific message from the backend
            throw new Error(data.error || 'Network response was not ok');
        }

        // If the response is OK, display the password
        document.getElementById('passwordResult').innerText = data.password;

    } catch (error) {
        // Display the specific error message from the backend
        console.error('Error:', error);
        document.getElementById('passwordResult').innerText = error.message;
    }
});