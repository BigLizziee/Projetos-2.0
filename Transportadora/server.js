const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'Transportadora'
});

con.connect((err) =>{
    if(err){
        console.error('Erro ao conectar ao banco de dados', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});
const teste = (req, res) => {
    res.send("back-end respondendo");
}

//CRUD - Create Veiculo
const createVeiculo = (req, res)=>{
    const {placa, modelo, capacidade} =req.body;

    const query = 'INSERT INTO Veiculo (placa, modelo, capacidade) VALUES(?,?, ?)'
    con.query(query, [placa, modelo, capacidade], (err,result)=> {
        if(err){
            res.status(500).json({error: err.message});
        } else {
            res.status(201).json({message: 'Veiculo Criado com sucesso', result});
        }

    });

}

//CRUD - Read Veiculos
const readVeiculos = (req, res) => {
    con.query("SELECT * FROM Veiculo",(err, result)=>{
        if(err){
            res.status(500).json({error: err.message});
        }  else{
            res.json(result);
        } 
     });
}

//CRUD - Update Veiculo
const updateVeiculo = (req, res) =>{
    const {placa, modelo, capacidade} = req.body;

    const query = 'UPDATE Veiculo SET modelo = ?, capacidade = ? WHERE placa = ?';
    con.query(query, [placa,modelo, capacidade], (err,result) => {
        if(err){
            res.status(500).json({error:err.message});
        } else {
            res.json({message: 'Veiculo removido com sucesso', result});
        }
    });
}


//CRUD - Delete Veiculo
const deleteVeiculo = (req, res) =>{
    const {placa} = req.params;

    const query = 'DELETE FROM Veiculo WHERE placa = ?';
    con.query(query, [placa], (err,result) => {
        if(err){
            res.status(500).json({error:err.message});
        } else {
            res.json({message: 'Veiculo removido com sucesso', result});
        }
    });
}

//Saida Front
const app = express();
app.use(express.json());
app.use(cors())
app.get("/", teste);

//Rotas para Veiculos
app.post("/Veiculos", createVeiculo);
app.get("/Veiculos", readVeiculos);
app.put("/Veiculos", updateVeiculo);
app.delete("/Veiculos/:placa", deleteVeiculo);


//Teste de porta
app.listen(3000, () => {
    console.log("Jacaré 3000");
});
