const mysql = require("mysql");
const http = require("http");
const fs = require("fs");

// Create a connection to the MySQL database
const db = mysql.createConnection({
	host: "localhost",
	user: "root", // your MySQL username
	password: "", // your MySQL password
	database: "beauty_creations_db",
});

// Connect to the database
db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log("MySQL Connected");
});

// Create a simple HTTP server
const server = http.createServer((req, res) => {
	// Handle your HTTP requests here
	res.writeHead(200, { "Content-Type": "text/html" });
	fs.readFile("index.html", (err, data) => {
		if (err) {
			throw err;
		}
		res.write(data);
		res.end();
	});
});

// Listen on a specific port (e.g., 3000)
server.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});


// ... (previous code)

// Example route to handle database interaction
server.on('/getData', (req, res) => {
    db.query('SELECT * FROM your_table_name', (err, result) => {
        if (err) {
            throw err;
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });
});

// ... (more code)

