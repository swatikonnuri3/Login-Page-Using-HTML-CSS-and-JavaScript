document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!"; // Display error message
        errorMessage.style.display = "block"; // Show the error message
    } else {
        errorMessage.style.display = "none"; // Hide the error message
        alert(`Welcome, ${username}!`); // Show welcome alert
    }
});
