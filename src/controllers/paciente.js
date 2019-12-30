'use strict'

const sql = require('mssql');
const config = require('../config/config')

const controller = {
    

    getPacientes:  (req, res) => {
        let request = new sql.Request();
        request.query('select * from paciente', (err, recordset) => {
            if(err)
                console.log(err);
            
            else{
                console.log(recordset);
                res.send(recordset);
            }    
        });
    },

    getPaciente: (req,res) => {
        let {id} = req.params;
        
        let request = new sql.Request();
        request.query(`select PacienteNombre from paciente where PacienteRut = '${id}' `, (err, recordset) =>{
            if(err)
            console.log(err)
            else{
                console.log(recordset);
                res.send(recordset);
            }
        } );
    },

    addPaciente: (req,res) =>{
        let sqlInsert = 'INSERT INTO dbo.Paciente (PacienteRut,PacienteNombre,PacienteApellidos,PacienteTelefono,PacienteEmail,PacienteFechaRegistro,PacienteEdad)';
        let sqlValue = `VALUES('4444-1','Ana','Perez','555555','pedro@gamil.com','5-03-2019',${30})`;
        let request = new sql.Request();
        request.query(sqlInsert+sqlValue,(err,result) => {
            if(err)
                console.log(err);
            else{
                console.log('1 record inserted');
                console.log(result);
                res.send('1 record inserted');
            }

        });
    },
    deletePaciente: (req,res) => {
        let {id} = req.params;
        
        let request = new sql.Request();
        request.query(`delete from paciente where PacienteRut = '${id}' `, (err, recordset) =>{
            if(err)
            console.log(err)
            else{
                console.log(recordset);
                res.send('Paciente eliminado correctamente');
            }
        } );
    }



    
};

module.exports = controller;

