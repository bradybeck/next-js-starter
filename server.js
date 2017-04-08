const {createServer} = require('http');
const {parse} = require('url');
const next = require('next');
const express = require('express');

const app = next();
const handle = app.getRequestHandler();

const port = 3000;

app.prepare().then(() => {
	const server = express()

	server.get('/api/v1/test', (req, res) => {
		res.type('text/plain');
		res.send("User-agent: *");
	});

	server.get('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(port, (err) => {
		if (err) {
			throw err;
		}
		console.log(`> Ready on http://localhost:${port}`)
	})
})
