const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

//load config

dotenv.config({path :'./config/config.env'})

connectDB()
const app =express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//handle bars

app.engine('.hbs', exphbs({defaultLayout: 'main',extname: '.hbs'}));
app.set('view engine', '.hbs');

//static folder
app.use(express.static(path.join(__dirname,'public')))
//routes
app.use('/',require('./routes/index'))
const PORT = process.env.PORT || 3000 ;
app.listen(PORT, console.log(`server running in in ${process.env.NODE_ENV} mode on port ${PORT}`))

