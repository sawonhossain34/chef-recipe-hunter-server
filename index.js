const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

// data load 
const countries = require('./data/countries.json');
const chefs = require('./data/chefs.json');

app.use(cors());

// port run web site
app.get('/', (req, res) => {
    res.send('Hello,chef is running');
})

app.get('/countries', (req, res) => {
    res.send(countries);
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedChefs = chefs.find(chef =>chef._id === id);
    res.send(selectedChefs);
})

app.get('/countries/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id === 0) {
        res.send(chefs);
    } else {
        const countryChefs = chefs.filter(chef => parseInt(chef.category_id) === id);
        res.send(countryChefs);
    }
})
// run port vs code

app.listen(port, () => {
    console.log(`chef API  is running on port : ${port}`);
})