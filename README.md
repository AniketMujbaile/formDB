 # User Registration Form Project

## Overview
This project implements a simple user registration form using Node.js, Express, and MongoDB. It features server-side validation, data sanitization, and secure storage of user information in a MongoDB Atlas database.

## 🔗 Hosted link: [FormDB](https://formdb.onrender.com/)

## Features
- User registration form with fields for name, email, and phone number
- Server-side validation and sanitization of input data
- MongoDB Atlas integration for data storage
- Responsive design with an attractive user interface

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed
- MongoDB Atlas account (or a local MongoDB installation)
- Git (optional, for cloning the repository)

## Installation

1. Clone the repository (or download the project files):
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd user-registration-form-project
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory with the following content:
   ```
   PORT=3000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/formDB
   ```
   Replace `<username>` and `<password>` with your MongoDB Atlas credentials.

## Usage

1. Start the server:
   ```
   npm start
   ```

2. Open a web browser and navigate to `http://localhost:3000` (or the port you specified in the .env file).

3. Fill out the registration form and submit. The data will be validated, sanitized, and stored in your MongoDB Atlas database.

## Project Structure
```
/project-root
├── .env
├── server.js
├── routes
│   └── userRoutes.js
├── controllers
│   └── userController.js
├── models
│   └── userModel.js
└── views
    └── form.ejs
```

## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- EJS (Embedded JavaScript templates)
- dotenv for environment variable management

## Validation Rules
- Name: 2-50 characters, allows letters, spaces, hyphens, and apostrophes
- Email: Must be a valid email format
- Phone: 10-digit number
- Terms & Conditions: Must be accepted