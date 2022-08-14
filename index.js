const express = require('express');
const PORT = 8000;
const app = express();
const img = '<image src="https://images.unsplash.com/photo-1660323875743-fd0842c7d22a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80" width="300">';
let counter = 0;

app.get('/', function(req, res) {
    res.status(200).send('Hello, World!');
    console.log('home route');
});

app.get('/nba/:team', (req, res) => {
    console.log('REQUEST', req.params);
    res.send(`<h1> Welcome to ${req.params.team}'s Website</h1>`);
});

app.get('/nba', (req, res) => {
    console.log('/nba route');
    const data = {
        team: 'Warriors',
        championship: 2022
    }
    res.send(data);
});

app.get("/greet/:firstName/:lastName", (req, res) => {
    res.send("Hello " + req.params.firstName + " " + req.params.lastName);
});

app.get("/multiply/:x/:y", (req, res) => {
res.send("The answer is: " + (req.params.x * req.params.y));
});

app.get("/add/:x/:y", (req, res) => {
res.send("The answer is: " + (parseInt(req.params.x) + parseInt(req.params.y)));
});

app.get('/mlb', (req, res) => {
    console.log('/nba route');
    const data = {
        team: 'Dodgers',
        championship: 2022
    }
    res.send(data);
});

app.get('/nfl', (req, res) => {
    console.log('/nba route');
    const data = {
        team: 'Browns',
        championship: 2022
    }
    res.send(data);
});

app.get('/test', (req, res) => {
    res.send(img);
});

app.get('/testRoute', function(req, res) {
    counter++;
    res.send(`${counter}`);
});

app.get("/abs", (req, res) => {
    let printout = '';
    for (let key in req.query) {
      printout += key + ": " + req.query[key] + "<br />";
    }
    res.send("Here's what they sent: <br /><br />" + printout);
  });

app.get('*', (req, res) => {
    res.status(404).send('This page does not exist');
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
});
