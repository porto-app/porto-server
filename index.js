const express = require('express')
const cors = require('cors');
const serverController = require('./controllers/profile')
const clientController = require('./controllers/frontend')
const methodOverride = require('method-override')
const app = express()

//must be above roots
app.use(methodOverride('_method'))
app.use(cors());
app.use(express.json())
app.use(express.static('views/images'));
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'hbs')

//start routes
app.get('/', (req, res) => {res.send('welcome to the home page')})
app.use('/server', serverController)
app.use('/profiles', clientController)

//end routes

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
console.log(`✅ PORT: ${app.get("port")} 🌟`);
});


