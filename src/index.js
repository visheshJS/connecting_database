import dotenv from 'dotenv'; // Import dotenv
import express from 'express'; // Import express

dotenv.config(); // Load environment variables

const app = express(); // Initialize express

const port = process.env.PORT || 3001; // Use environment variable or default port

// Routes
