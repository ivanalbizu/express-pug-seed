const express = require('express')
const artists = require('./data/artists.json')
const app = express()
const path = require('path')
const port = process.env.PORT || 5656


app.use(express.static(path.join(__dirname + '/public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/charles', (req, res) => {
    res.render('index', artists.artist[0])
})
app.get('/marilyn', (req, res) => {
    res.render('index', artists.artist[0])
})
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})