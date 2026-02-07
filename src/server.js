const app = require('./app');

// Use the port defined in the environment or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Test endpoint: http://localhost:${PORT}/users`);
});