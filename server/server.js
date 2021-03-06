const express = require('express');
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req,res) =>  {
         res.sendFile(path.join(__dirname, '../index.html'));
     })

app.get('/dist/*.js', (req,res) =>  {
    res.sendFile(path.join(__dirname, '../dist/bundle.js'));
})

app.get('/dist/*.css', (req,res) =>  {
    res.sendFile(path.join(__dirname, '../dist/styles.css'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))