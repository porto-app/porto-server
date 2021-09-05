const express = require('express')
const profilesController = require('./controllers/profile')
const methodOverride = require('method-override')
const app = express()

//must be above roots
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.static('views/images')); 
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'hbs')

//start routes
app.get('/', (req, res) => {res.send('welcome to the home page')})
app.use('/profiles', profilesController)

//end routes

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`express is runnong on ${port}`)
})