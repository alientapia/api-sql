'use strict'

// Constante sql para conexion a base datos sql server
const sql = require('mssql');

//requerimos archivo app 
const app = require('./app');

// Establecer puerto
const port = process.env.PORT || 5000;

//variables de conexion
const config = require('./src/config/config');

// Conexion a la basedatos
  const connection = sql.connect(config, (err, res) => {
     if(err){
          throw err;
     } 
     else{
          console.log("Connected to database success");
          app.listen(port, () => {
              console.log(`Api-sql running on port: ${port} ....`);
          });
    }
  });


//Exports module 

module.exports = app;
 
