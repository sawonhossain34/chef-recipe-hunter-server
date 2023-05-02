const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const countries = require('./data/countries.json');

app.get('/',(req,res)=> {
    res.send('Hello,chef is running');
})

app.get('/countries',(req,res) => {
    res.send(countries);
})


app.listen(port,() => {
    console.log(`chef API  is running on port : ${port}`);
})