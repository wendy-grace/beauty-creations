const mysql = require("mysql");
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "beauty_creations_db",
});

db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log("MySQL Connected");
});

const app = express(); // Use express to create the app

app.use(cors());
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.get("/", (req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	fs.readFile("index.html", (err, data) => {
		if (err) {
			throw err;
		}
		res.write(data);
		res.end();
	});
});

// Get all reservations
app.get("/api/reservations", (req, res) => {
	db.query("SELECT * from reservations", (err, result) => {
		if (err) {
			throw err;
		}
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(result));
	});
});


// Admin sign in
app.post("/api/admin-sign-in", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	// Log username and password to console
	console.log(`username: ${username}, password: ${password}`);


	db.query(
		`SELECT * from admins WHERE username = '${username}' AND password = '${password}'`,
		(err, result) => {
			if (err) {
				throw err;
			}
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(result));
		}
	);
});

// Get admins
app.get("/api/admins", (req, res) => {
	console.log("Getting admins");
	db.query("SELECT * from admins", (err, result) => {
		if (err) {
			throw err;
		}
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(result));
	});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
