const mysql = require("mysql");
const express = require("express");
const fs = require("fs");
const cors = require("cors");

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
app.get("/api/admin-sign-in", (req, res) => {
	const { username, password } = req.query;
	db.query(
		`SELECT * from admin WHERE username = '${username}' AND password = '${password}'`,
		(err, result) => {
			if (err) {
				throw err;
			}
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify(result));
		}
	);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
