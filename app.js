const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongooseConnection = require('./database/connection');
const userRoutes = require("./routes/registerUser")
const loginRoutes = require("./routes/loginUser")
const formRoutes = require('./routes/formRoutes')
const limiter = require("./middlewares/rateLimiter")
const initNotificaciones = require("./middlewares/notificaciones")
require('dotenv').config();

//INICIALIZAR SERVER
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(limiter)

//ROUTES
app.use("/registrar", userRoutes)
app.use("/login", loginRoutes)
app.use('/formularios', formRoutes)
app.use('/uploads', express.static('uploads'));

//DATABASE CONNECT
mongooseConnection()
initNotificaciones()

app.listen(process.env.PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${process.env.PORT}`);
})
