# Simple Node.js Web Server

This project sets up a simple Node.js web server that serves an HTML file and handles 404 errors for specific routes.

## Project Structure

```
simple-node-server
├── public
│   ├── index.html       # HTML content for the main webpage
│   └── 404.html        # HTML content for the 404 error page
├── src
│   └── server.js       # Entry point of the application
├── package.json         # Configuration file for npm
└── README.md            # Documentation for the project
```

## Getting Started

To set up and run the server, follow these steps:

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd simple-node-server
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the server**:
   Execute the following command to start the server:
   ```bash
   node src/server.js
   ```

4. **Access the application**:
   Open your web browser and navigate to `http://localhost:3000/index.html` to view the main webpage. For any other route that matches the pattern "{random}.html", you will see the 404 error page.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.