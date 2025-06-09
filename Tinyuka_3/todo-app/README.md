# Todo Application

## Overview
The Todo Application is a simple task management tool built with Node.js and Express. It allows users to create, manage, and organize their tasks effectively. Users can sign up, log in, and view their tasks, which can be categorized as pending, completed, or deleted.

## Features
- User authentication (sign up and login)
- Task management (create, update, delete, and retrieve tasks)
- Sorting tasks by status (pending and completed)
- Simple and intuitive user interface

## Technologies Used
- Node.js
- Express.js
- MongoDB (with Mongoose)
- EJS (Embedded JavaScript templating)
- CSS for styling
- JavaScript for client-side interactions

## Project Structure
```
todo-app
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── views
│   ├── middlewares
│   └── app.js
├── logs
├── public
│   ├── css
│   └── js
├── tests
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Setup Instructions
1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string and any other necessary environment variables.

4. **Run the application:**
   ```
   npm start
   ```

5. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

## Testing
To run the tests, use the following command:
```
npm test
```

## Logging
Application logs are stored in the `logs/app.log` file. Ensure to check this file for any errors or important events.

## Contribution
Feel free to fork the repository and submit pull requests for any improvements or bug fixes.

## License
This project is licensed under the MIT License.