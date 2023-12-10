const mongoose = require("mongoose")

const connectionDB = async () =>{
    try {
         await mongoose.connect(process.env.DB_NAME)
         console.log("Conexión exitosa a la base de datos")
    } catch (error) {
        console.error("Error al conectar a la base de datos", error.message)
    }
}
module.exports = connectionDB;