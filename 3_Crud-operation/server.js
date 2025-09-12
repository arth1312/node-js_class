const express = require("express");
const server = express();

let persons = [
    {
        id: 101,
        name: "Arth Koradiya",
        email: "arth@test.in",
        job: "full-stack development"
    },
    {
        id: 102,
        name: "Parth Patel",
        email: "parth@test.in",
        job: "game development"
    },
    {
        id: 103,
        name: "Sumedh Mudgalkar",
        email: "sumedh@test.in",
        job: "Actor"
    }
];

server.use(express.urlencoded());

server.set("view engine", "ejs");

server.get('/', (req, res) => {
    res.render('index', { persons });
});

server.get('/add_person', (req, res) => {
    res.render('addPerson');
});

server.post('/add_person', (req, res) => {
    // const newPerson = req.body;
    persons.push(req.body);
    res.redirect('/');
});

let port = 8001;

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
