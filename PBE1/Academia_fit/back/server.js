const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

//Conexão com o SGBD MySQL
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'Academia_fit'
});

// Rota de teste
const teste = (req, res) => {
    res.send("back-end respondendo");
}

//CRUD - create
const create = (req, res) => {
    let cpf = req.query.cpf;
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    let altura = req.query.altura;
    let peso = req.query.peso;
    let endereco = req.query.endereco;
    let nascimento = req.query.nascimento;
    let query = `INSERT INTO Clientes(cpf, nome, sobrenome, altura, peso, endereco, nascimento) VALUE`;
    query +=`('${cpf}', '${nome}', '${sobrenome}','${altura}','${peso}','${endereco}','${nascimento}');`;
    con.query(query,(err,result)=>{
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }

    });
    console.log("Cadastrado");
    
    const create2 = (req, res) => {
        let cpf = req.query.cpf;
        let nome = req.query.nome;
        let sobrenome = req.query.sobrenome;
        let formacao = req.query.formacao;
        let endereco = req.query.endereco;
        let nascimento = req.query.nascimento;
        let query = `INSERT INTO Treinadores(cpf, nome, sobrenome, formacao, endereco, nascimento) VALUE`;
        query +=`('${cpf}', '${nome}', '${sobrenome}','${formacao}','${endereco}','${nascimento}');`;
        con.query(query,(err,result)=>{
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
    
        });
        console.log("Cadastrado");
    }
}
//CRUD - Read
const read = (req,res)=> {
    con.query("SELECT * FROM Clientes", (err, result) =>{
        if(err)
            res.json(err);
        else
        res.json(result);

    });
}
//Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());

//Rotas de saída - FrontEnd
app.get("/", teste)
app.get("/Clientes/create", create);
app.get("/Clientes", read);
app.get("/Treinadores/create", create2);



//Teste e porta no console
app.listen(3000, () => {
    console.log("Deu certo");
});