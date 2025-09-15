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

server.use(express.urlencoded()); // middelware

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

server.get('/delete-person/:id', (req, res) => {
    let id = req.params.id;
    persons = persons.filter(person => person.id != id)

    res.redirect('/')
})


server.get('/edit-person/:id', (req, res) => {
    let id = req.params.id;
    let person = persons.find(person => person.id == id)
    console.log(person);

    res.render('editPerson', { person, id });
});

server.post('/edit_person/:id', (req, res) => {
    let id = req.params.id;
    let record = persons.findIndex(person => person.id == id);
    persons[record] = { ...persons[record], ...req.body };

    res.redirect("/");
});

let port = 8002;

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
