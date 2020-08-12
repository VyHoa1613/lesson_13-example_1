
var express = require('express')
var cookieParser = require('cookie-parser')
var app = express()
var port = 3000


var booksRouter = require("./Routes/books.route");
var usersRouter = require("./Routes/users.route");
var transactionRouter = require("./Routes/transaction.route");
var indexRouter = require("./Routes/index.route");
var countCookie = require("./middleware/countCookie")
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views','./views');

// Set some defaults (required if your JSON file is empty)
app.use(cookieParser())
app.use(express.static('public'))
app.use("/books",countCookie.cookie,booksRouter);

app.use("/",indexRouter);

// Users
app.use("/users",countCookie.cookie,usersRouter);
//
app.use("/transaction",countCookie.cookie,transactionRouter);

app.listen(port, () => {
    console.log('hello book store'+ port);
  })