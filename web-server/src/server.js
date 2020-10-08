const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const pratialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')

app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(pratialsPath)



app.get('', (req, res)=>{
    res.render('index',{title: 'This is the title of this page', name: 'Andre'})
})


app.get('/weather', (req, res)=>{
    res.send({forecast: 'its snowing', location: 'Philadelphia'})
})

app.get('/about', (req, res)=>{
    res.render('index', {title: 'This is the about page', name: 'My name is andre'})
})

app.get('/help', (req, res) => {
    res.render('help', {message: 'This is a help message', title: 'HELP', name: 'Andre'})
})

app.get('/help/*', (req, res) =>{
    res.render('404', {error: 'Help dir not found'})
})

app.get('*', (req, res) =>{
    res.render('404', {error: 'Page Not found'})
})


app.listen(3000, () => {
    console.log('Server is up on port 3000')
})