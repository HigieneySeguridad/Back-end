const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongooseConnection = require('./database/connection');
const userRoutes = require("./routes/registerUser")
const loginRoutes = require("./routes/loginUser")

//INICIALIZAR SERVER
const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config();


//ROUTES
app.use("/registrar", userRoutes)
app.use("/login", loginRoutes)

//DATABASE CONNECT
mongooseConnection()


app.listen(process.env.PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${process.env.PORT}`);
})
